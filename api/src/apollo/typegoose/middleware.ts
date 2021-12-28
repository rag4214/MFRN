// https://github.com/MichalLytek/type-graphql/blob/master/examples/typegoose/typegoose-middleware.ts

import { DocumentType, getClassForDocument, isDocument } from '@typegoose/typegoose';
import { RefType } from 'mongoose';
import { MiddlewareFn } from 'type-graphql';

const convertDocument = (doc: DocumentType<unknown>) => {
  const DocumentClass = getClassForDocument(doc);
  const convertedDocument = doc.toObject();

  Object.setPrototypeOf(convertedDocument, Object.getPrototypeOf(DocumentClass));

  return convertedDocument;
};

const TypegooseMiddleware: MiddlewareFn = async (_, next) => {
  const result = await next();

  if (Array.isArray(result)) {
    return result.map((item) => (isDocument<unknown, RefType>(item) ? convertDocument(item) : item));
  }

  if (isDocument<unknown, RefType>(result)) {
    return convertDocument(result);
  }

  return result;
};

export default TypegooseMiddleware;

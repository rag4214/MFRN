import 'reflect-metadata';

import { Types } from 'mongoose';
import { buildSchema } from 'type-graphql';

import { BookResolver } from './books';
import ObjectIdScalar from './objectId';
import TypegooseMiddleware from './typegoose';

const schema = buildSchema({
  globalMiddlewares: [TypegooseMiddleware],
  nullableByDefault: true,
  resolvers: [BookResolver],
  scalarsMap: [{ type: Types.ObjectId, scalar: ObjectIdScalar }],
});

export default schema;

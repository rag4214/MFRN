import { UserInputError } from 'apollo-server-core';
import { GraphQLScalarType, Kind } from 'graphql';
import { Types } from 'mongoose';

const ObjectIdScalar = new GraphQLScalarType({
  name: 'ObjectId',

  serialize(value: Types.ObjectId) {
    return value.toHexString();
  },

  parseValue(value: unknown) {
    if (typeof value !== 'string') {
      throw new UserInputError('ObjectId Scalar Can Only Parse String Values');
    }

    return new Types.ObjectId(value);
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new UserInputError('ObjectId Scalar Can Only Parse String Values');
    }

    return new Types.ObjectId(ast.value);
  },
});

export default ObjectIdScalar;

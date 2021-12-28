import { getModelForClass, prop } from '@typegoose/typegoose';
import { Types } from 'mongoose';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Book {
  @Field({ nullable: false })
  _id!: Types.ObjectId;

  @prop()
  @Field()
  author?: string;

  @prop()
  @Field()
  title?: string;
}

export const Books = getModelForClass(Book);

export default Book;

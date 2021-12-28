import { Types } from 'mongoose';
import {
  Arg,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';

import Book, { Books } from './entity';

@InputType()
class CreateBookInput implements Partial<Book> {
  @Field()
  title?: string;

  @Field()
  author?: string;
}

@InputType()
class UpdateBookInput implements Partial<Book> {
  @Field()
  title?: string;

  @Field()
  author?: string;
}

@Resolver(Book)
class BookResolver {
  // nullable:
  // none, [Book]
  // true, [Book!]
  // false, [Book!]!
  // 'items', [Book]!
  @Query(() => [Book], { nullable: 'items' })
  async getBooks() {
    return Books.find();
  }

  @Query(() => Book)
  async getBook(@Arg('id', { nullable: false }) id: Types.ObjectId) {
    return Books.findById(id);
  }

  @Mutation(() => Book)
  async createBook(@Arg('input', { nullable: false }) input: CreateBookInput) {
    return Books.create(input);
  }

  @Mutation(() => Book)
  async updateBook(@Arg('id', { nullable: false }) id: Types.ObjectId, @Arg('input', { nullable: false }) input: UpdateBookInput) {
    return Books.findByIdAndUpdate(id, input);
  }

  @Mutation(() => Book)
  async deleteBook(@Arg('id', { nullable: false }) id: Types.ObjectId) {
    return Books.findByIdAndDelete(id);
  }
}

export default BookResolver;

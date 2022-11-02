import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Post } from '../post/post.model';
import { AuthorCount } from './author-count.output';

@ObjectType()
export class Author {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    avatar!: string;

    @Field(() => String, {nullable:false})
    profileUrl!: string;

    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;

    @Field(() => AuthorCount, {nullable:false})
    _count?: AuthorCount;
}

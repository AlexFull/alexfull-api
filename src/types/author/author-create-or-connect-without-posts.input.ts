import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutPostsInput } from './author-create-without-posts.input';

@InputType()
export class AuthorCreateOrConnectWithoutPostsInput {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    @Type(() => AuthorWhereUniqueInput)
    where!: AuthorWhereUniqueInput;

    @Field(() => AuthorCreateWithoutPostsInput, {nullable:false})
    @Type(() => AuthorCreateWithoutPostsInput)
    create!: AuthorCreateWithoutPostsInput;
}

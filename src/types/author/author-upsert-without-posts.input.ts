import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateWithoutPostsInput } from './author-update-without-posts.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutPostsInput } from './author-create-without-posts.input';

@InputType()
export class AuthorUpsertWithoutPostsInput {

    @Field(() => AuthorUpdateWithoutPostsInput, {nullable:false})
    @Type(() => AuthorUpdateWithoutPostsInput)
    update!: AuthorUpdateWithoutPostsInput;

    @Field(() => AuthorCreateWithoutPostsInput, {nullable:false})
    @Type(() => AuthorCreateWithoutPostsInput)
    create!: AuthorCreateWithoutPostsInput;
}

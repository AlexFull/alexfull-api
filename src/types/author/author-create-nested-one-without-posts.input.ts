import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutPostsInput } from './author-create-without-posts.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutPostsInput } from './author-create-or-connect-without-posts.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@InputType()
export class AuthorCreateNestedOneWithoutPostsInput {

    @Field(() => AuthorCreateWithoutPostsInput, {nullable:true})
    @Type(() => AuthorCreateWithoutPostsInput)
    create?: AuthorCreateWithoutPostsInput;

    @Field(() => AuthorCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => AuthorCreateOrConnectWithoutPostsInput)
    connectOrCreate?: AuthorCreateOrConnectWithoutPostsInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    @Type(() => AuthorWhereUniqueInput)
    connect?: AuthorWhereUniqueInput;
}

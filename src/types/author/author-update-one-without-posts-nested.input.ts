import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutPostsInput } from './author-create-without-posts.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutPostsInput } from './author-create-or-connect-without-posts.input';
import { AuthorUpsertWithoutPostsInput } from './author-upsert-without-posts.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateWithoutPostsInput } from './author-update-without-posts.input';

@InputType()
export class AuthorUpdateOneWithoutPostsNestedInput {

    @Field(() => AuthorCreateWithoutPostsInput, {nullable:true})
    @Type(() => AuthorCreateWithoutPostsInput)
    create?: AuthorCreateWithoutPostsInput;

    @Field(() => AuthorCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => AuthorCreateOrConnectWithoutPostsInput)
    connectOrCreate?: AuthorCreateOrConnectWithoutPostsInput;

    @Field(() => AuthorUpsertWithoutPostsInput, {nullable:true})
    @Type(() => AuthorUpsertWithoutPostsInput)
    upsert?: AuthorUpsertWithoutPostsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    @Type(() => AuthorWhereUniqueInput)
    connect?: AuthorWhereUniqueInput;

    @Field(() => AuthorUpdateWithoutPostsInput, {nullable:true})
    @Type(() => AuthorUpdateWithoutPostsInput)
    update?: AuthorUpdateWithoutPostsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { PostUncheckedCreateNestedManyWithoutAuthorInput } from '../post/post-unchecked-create-nested-many-without-author.input';

@InputType()
export class AuthorUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    avatar!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    profileUrl!: string;

    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

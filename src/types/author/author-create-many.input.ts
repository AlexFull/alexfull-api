import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class AuthorCreateManyInput {

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

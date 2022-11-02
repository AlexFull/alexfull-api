import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutCategoryInput } from '../post/post-create-nested-many-without-category.input';

@InputType()
export class CategoryCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => PostCreateNestedManyWithoutCategoryInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutCategoryInput;
}

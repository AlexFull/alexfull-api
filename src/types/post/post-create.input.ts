import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutPostsInput } from '../category/category-create-nested-one-without-posts.input';
import { AuthorCreateNestedOneWithoutPostsInput } from '../author/author-create-nested-one-without-posts.input';

@InputType()
export class PostCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    cover!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CategoryCreateNestedOneWithoutPostsInput, {nullable:true})
    category?: CategoryCreateNestedOneWithoutPostsInput;

    @Field(() => AuthorCreateNestedOneWithoutPostsInput, {nullable:true})
    author?: AuthorCreateNestedOneWithoutPostsInput;
}

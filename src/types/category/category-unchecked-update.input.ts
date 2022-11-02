import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PostUncheckedUpdateManyWithoutCategoryNestedInput } from '../post/post-unchecked-update-many-without-category-nested.input';

@InputType()
export class CategoryUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => PostUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    posts?: PostUncheckedUpdateManyWithoutCategoryNestedInput;
}

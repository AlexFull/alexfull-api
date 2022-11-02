import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    content = "content",
    cover = "cover",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    categoryId = "categoryId",
    authorId = "authorId"
}


registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })

import { registerEnumType } from '@nestjs/graphql';

export enum AuthorScalarFieldEnum {
    id = "id",
    name = "name",
    avatar = "avatar",
    profileUrl = "profileUrl",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AuthorScalarFieldEnum, { name: 'AuthorScalarFieldEnum', description: undefined })

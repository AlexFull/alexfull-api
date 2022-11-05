import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AuthorWhereInput {

    @Field(() => [AuthorWhereInput], {nullable:true})
    AND?: Array<AuthorWhereInput>;

    @Field(() => [AuthorWhereInput], {nullable:true})
    OR?: Array<AuthorWhereInput>;

    @Field(() => [AuthorWhereInput], {nullable:true})
    NOT?: Array<AuthorWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    avatar?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    profileUrl?: StringFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}

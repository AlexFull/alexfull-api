import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AuthorScalarWhereWithAggregatesInput {

    @Field(() => [AuthorScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuthorScalarWhereWithAggregatesInput>;

    @Field(() => [AuthorScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuthorScalarWhereWithAggregatesInput>;

    @Field(() => [AuthorScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuthorScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    avatar?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    profileUrl?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}

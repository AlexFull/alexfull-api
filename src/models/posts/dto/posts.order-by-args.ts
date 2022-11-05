import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { PostOrderByWithRelationInput } from 'src/types/post/post-order-by-with-relation.input';
import { PostScalarFieldEnum } from 'src/types/post/post-scalar-field.enum';
import { PostWhereUniqueInput } from 'src/types/post/post-where-unique.input';
import { PostWhereInput } from 'src/types/post/post-where.input';

@ArgsType()
export class PostOrderByArgs {
  @Field(() => [])
  orderBy?: ['asc', 'desc'];
}

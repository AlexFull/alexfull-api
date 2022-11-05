import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeleteOnePostArgs } from 'src/types/post/delete-one-post.args';
import { FindManyPostArgs } from 'src/types/post/find-many-post.args';
import { FindUniquePostArgs } from 'src/types/post/find-unique-post.args';
import { PostCreateInput } from 'src/types/post/post-create.input';
import { PostOrderByWithRelationInput } from 'src/types/post/post-order-by-with-relation.input';
import { PostUpdateInput } from 'src/types/post/post-update.input';
import { PostWhereInput } from 'src/types/post/post-where.input';
import { Post } from 'src/types/post/post.model';
import { PostsService } from './posts.service';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  async createPost(@Args('create') createPostInput: PostCreateInput) {
    return await this.postsService.createPost(createPostInput);
  }

  @Query(() => [Post])
  async getPosts(
    @Args() findManyPostArgs: FindManyPostArgs,
    @Args('orderByPostsArgs')
    orderByPostsArgs: PostOrderByWithRelationInput,
    @Args('wherePostsArgs')
    wherePostsArgs: PostWhereInput,
  ): Promise<Post[]> {
    return await this.postsService.getPosts(
      findManyPostArgs,
      orderByPostsArgs,
      wherePostsArgs,
    );
  }

  @Query(() => Post)
  async getPost(@Args() findUniquePostArgs: FindUniquePostArgs): Promise<Post> {
    return await this.postsService.getPost(findUniquePostArgs);
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('updatePostInput') updatePostInput: PostUpdateInput,
    @Args('id') id: string,
  ): Promise<Post> {
    return await this.postsService.updatePost(updatePostInput, id);
  }

  @Mutation(() => Post)
  async deletePost(
    @Args() deleteOnePostArgs: DeleteOnePostArgs,
  ): Promise<Post> {
    return await this.postsService.deletePost(deleteOnePostArgs);
  }
}

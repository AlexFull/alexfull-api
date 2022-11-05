import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthorCreateInput } from 'src/types/author/author-create.input';
import { AuthorUpdateInput } from 'src/types/author/author-update.input';
import { Author } from 'src/types/author/author.model';
import { DeleteOneAuthorArgs } from 'src/types/author/delete-one-author.args';
import { FindManyAuthorArgs } from 'src/types/author/find-many-author.args';
import { FindUniqueAuthorArgs } from 'src/types/author/find-unique-author.args';
import { AuthorsService } from './authors.service';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) {}

  @Mutation(() => Author)
  async createAuthor(@Args('create') createAuthorInput: AuthorCreateInput) {
    return await this.authorsService.createAuthor(createAuthorInput);
  }

  @Query(() => [Author])
  async getAuthors(
    @Args() findManyAuthorArgs: FindManyAuthorArgs,
  ): Promise<Author[]> {
    return await this.authorsService.getAuthors(findManyAuthorArgs);
  }

  @Query(() => Author)
  async getAuthor(
    @Args() findUniqueAuthorArgs: FindUniqueAuthorArgs,
  ): Promise<Author> {
    return await this.authorsService.getAuthor(findUniqueAuthorArgs);
  }

  @Mutation(() => Author)
  async updateAuthor(
    @Args('updateAuthorInput') updateAuthorInput: AuthorUpdateInput,
    @Args('id') id: string,
  ): Promise<Author> {
    return await this.authorsService.updateAuthor(updateAuthorInput, id);
  }

  @Mutation(() => Author)
  async deleteAuthor(
    @Args() deleteOneAuthorArgs: DeleteOneAuthorArgs,
  ): Promise<Author> {
    return await this.authorsService.deleteAuthor(deleteOneAuthorArgs);
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DeleteOneAuthorArgs } from 'src/types/author/delete-one-author.args';
import { FindManyAuthorArgs } from 'src/types/author/find-many-author.args';
import { FindUniqueAuthorArgs } from 'src/types/author/find-unique-author.args';
import { AuthorCreateInput } from 'src/types/author/author-create.input';
import { AuthorUpdateInput } from 'src/types/author/author-update.input';
import { Author } from 'src/types/author/author.model';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  async createAuthor(authorCreateInput: AuthorCreateInput): Promise<Author> {
    return this.prisma.author.create({
      data: authorCreateInput,
    });
  }

  async getAuthors(findManyAuthorArgs: FindManyAuthorArgs): Promise<Author[]> {
    return await this.prisma.author.findMany({
      take: findManyAuthorArgs.take,
      skip: findManyAuthorArgs.skip,

      include: {
        posts: true,
        _count: true,
      },
    });
  }

  async getAuthor(findUniqueAuthorArgs: FindUniqueAuthorArgs): Promise<Author> {
    return await this.prisma.author.findUnique(findUniqueAuthorArgs);
  }

  async updateAuthor(
    updateAuthorInput: AuthorUpdateInput,
    id: string,
  ): Promise<Author> {
    return await this.prisma.author.update({
      data: {
        ...updateAuthorInput,
      },
      where: {
        id,
      },
    });
  }

  async deleteAuthor(
    deleteOneAuthorArgs: DeleteOneAuthorArgs,
  ): Promise<Author> {
    return await this.prisma.author.delete(deleteOneAuthorArgs);
  }
}

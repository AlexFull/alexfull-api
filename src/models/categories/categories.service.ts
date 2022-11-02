import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { DeleteOneCategoryArgs } from 'src/types/category/delete-one-category.args';
import { FindManyCategoryArgs } from 'src/types/category/find-many-category.args';
import { FindUniqueCategoryArgs } from 'src/types/category/find-unique-category.args';
import { CategoryCreateInput } from 'src/types/category/category-create.input';
import { CategoryUpdateInput } from 'src/types/category/category-update.input';
import { Category } from 'src/types/category/category.model';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async createCategory(
    categoryCreateInput: CategoryCreateInput,
  ): Promise<Category> {
    return this.prisma.category.create({
      data: categoryCreateInput,
    });
  }

  async getCategories(
    findManyCategoryArgs: FindManyCategoryArgs,
  ): Promise<Category[]> {
    return await this.prisma.category.findMany({
      take: findManyCategoryArgs.take,
      skip: findManyCategoryArgs.skip,

      include: {
        posts: true,
        _count: true,
      },
    });
  }

  async getCategory(
    findUniqueCategoryArgs: FindUniqueCategoryArgs,
  ): Promise<Category> {
    return await this.prisma.category.findUnique(findUniqueCategoryArgs);
  }

  async updateCategory(
    updateCategoryInput: CategoryUpdateInput,
    id: string,
  ): Promise<Category> {
    return await this.prisma.category.update({
      data: {
        ...updateCategoryInput,
      },
      where: {
        id,
      },
    });
  }

  async deleteCategory(
    deleteOneCategoryArgs: DeleteOneCategoryArgs,
  ): Promise<Category> {
    return await this.prisma.category.delete(deleteOneCategoryArgs);
  }
}

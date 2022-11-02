import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { DeleteOneCategoryArgs } from 'src/types/category/delete-one-category.args';
import { FindManyCategoryArgs } from 'src/types/category/find-many-category.args';
import { FindUniqueCategoryArgs } from 'src/types/category/find-unique-category.args';
import { CategoryCreateInput } from 'src/types/category/category-create.input';
import { CategoryUpdateInput } from 'src/types/category/category-update.input';
import { Category } from 'src/types/category/category.model';

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  async createCategory(
    @Args('create') createCategoryInput: CategoryCreateInput,
  ) {
    return await this.categoriesService.createCategory(createCategoryInput);
  }

  @Query(() => [Category])
  async getCategories(
    @Args() findManyCategoryArgs: FindManyCategoryArgs,
  ): Promise<Category[]> {
    return await this.categoriesService.getCategories(findManyCategoryArgs);
  }

  @Query(() => Category)
  async getCategory(
    @Args() findUniqueCategoryArgs: FindUniqueCategoryArgs,
  ): Promise<Category> {
    return await this.categoriesService.getCategory(findUniqueCategoryArgs);
  }

  @Mutation(() => Category)
  async updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: CategoryUpdateInput,
    @Args('id') id: string,
  ): Promise<Category> {
    return await this.categoriesService.updateCategory(updateCategoryInput, id);
  }

  @Mutation(() => Category)
  async deleteCategory(
    @Args() deleteOneCategoryArgs: DeleteOneCategoryArgs,
  ): Promise<Category> {
    return await this.categoriesService.deleteCategory(deleteOneCategoryArgs);
  }
}

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CategoriesModule } from './models/categories/categories.module';
import { PostsModule } from './models/posts/posts.module';
import { AuthorsModule } from './models/authors/authors.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema/schema.gql'),
      sortSchema: true,
    }),
    CategoriesModule,
    PostsModule,
    AuthorsModule,
  ],
})
export class AppModule {}

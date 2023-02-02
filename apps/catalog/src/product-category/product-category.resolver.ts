import 'reflect-metadata';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { ProductCategory } from './product-category.model';
import { CuidResolver } from 'graphql-scalars';

@Resolver(ProductCategory)
export class ProductCategoryResolver {
  @Query(() => ProductCategory, { nullable: true })
  async productCategory(
    @Args('id', { type: () => CuidResolver }) id: string,
  ): Promise<ProductCategory | null> {
    return {
      id: id,
      name: 'Manggo',
      price: 100000,
    };
  }

  @Query(() => [ProductCategory])
  async productCategories(): Promise<ProductCategory[]> {
    return [
      {
        id: '1',
        name: 'Manggo',
        price: 100000,
      },
    ];
  }
}

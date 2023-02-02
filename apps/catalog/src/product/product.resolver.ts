import 'reflect-metadata';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { Product } from './product.model';
import { CuidResolver } from 'graphql-scalars';

@Resolver(Product)
export class ProductResolver {
  @Query(() => Product, { nullable: true })
  async product(
    @Args('id', { type: () => CuidResolver }) id: string,
  ): Promise<Product | null> {
    return {
      id: id,
      name: 'Manggo',
      price: 100000,
    };
  }

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return [
      {
        id: '1',
        name: 'Manggo',
        price: 100000,
      },
    ];
  }
}

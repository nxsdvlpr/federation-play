import { Module } from '@nestjs/common';
import { ProductCategoryController } from './product-category.controller';
import { ProductCategoryResolver } from './product-category.resolver';

@Module({
  controllers: [ProductCategoryController],
  providers: [ProductCategoryResolver],
})
export class ProductCategoryModule {}

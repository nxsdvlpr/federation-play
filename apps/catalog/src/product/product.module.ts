import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductResolver } from './product.resolver';

@Module({
  controllers: [ProductController],
  providers: [ProductResolver],
})
export class ProductModule {}

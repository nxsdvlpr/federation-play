import { Controller, Get, Res } from '@nestjs/common';

@Controller('product-category')
export class ProductCategoryController {
  @Get('alive')
  alive(@Res() res): string {
    return res.json({
      status: true,
    });
  }
}

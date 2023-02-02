import { Controller, Get, Res } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get('alive')
  alive(@Res() res): string {
    return res.json({
      status: true,
    });
  }
}

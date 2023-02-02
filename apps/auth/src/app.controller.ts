import { Controller, Get, Res } from '@nestjs/common';
import { Public } from './auth/decorators/public.decorator';

@Controller('app')
export class AppController {
  @Public()
  @Get('alive')
  alive(@Res() res): string {
    return res.json({
      status: true,
    });
  }
}

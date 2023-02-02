import { Injectable } from '@nestjs/common';
import { getHello } from '../helpers';

@Injectable()
export class AppService {
  getHello(): string {
    return getHello();
  }
}

import { INestApplication, Inject, Injectable } from '@nestjs/common';
import { PRISMA_CLIENT } from './constants';

@Injectable()
export class PrismaService {
  constructor(@Inject(PRISMA_CLIENT) private prisma) {}

  async enableShutdownHooks(app: INestApplication) {
    this.prisma.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

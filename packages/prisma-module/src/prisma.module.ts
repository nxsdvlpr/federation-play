import path from 'path';
import { DynamicModule, Module, Provider } from '@nestjs/common';

import { PRISMA_CLIENT } from './constants';
import { PrismaService } from './prisma.service';

export interface IPrismaOptions {
  name: string;
  middleware?: (params: any, next: any) => Promise<any>;
}

@Module({})
export class PrismaModule {
  static forRoot(options: IPrismaOptions): DynamicModule {
    const clientProvider: Provider = {
      provide: PRISMA_CLIENT,
      useFactory: async () => {
        // const clientPath = path.resolve(
        //   __dirname,
        //   '../../../',
        //   `apps/${options.name}/src/@generated/prisma/client`,
        // );

        const { PrismaClient } = await import(
          `@generated/${options.name}/prisma/client/`
        );

        const prisma = new PrismaClient();

        if (options.middleware) {
          prisma.$use(options.middleware);
        }

        return prisma;
      },
    };

    return {
      global: true,
      module: PrismaModule,
      providers: [clientProvider, PrismaService],
      exports: [clientProvider, PrismaService],
    };
  }
}

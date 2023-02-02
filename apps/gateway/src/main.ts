import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import * as waitOn from 'wait-on';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  await app.listen(configService.get('APP_PORT'));

  console.log(
    `----------\nStart ${configService.get(
      'APP_NAME',
    )} service at http://${configService.get('APP_HOST')}:${configService.get(
      'APP_PORT',
    )}/ ...\n----------\n`,
  );
}

const opts = {
  resources: [
    `${process.env.AUTH_SERVICE_ENPOINT}/app/alive`,
    `${process.env.POST_SERVICE_ENPOINT}/app/alive`,
    `${process.env.CATALOG_SERVICE_ENPOINT}/app/alive`,
  ],
  validateStatus: (status) => {
    return status >= 200 && status < 300;
  },
};

waitOn(opts)
  .then(() => {
    bootstrap();
  })
  .catch((err) => {
    console.log(err);
  });

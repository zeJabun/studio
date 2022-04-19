require('dotenv').config();

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import { MainModule } from '~main.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setBaseViewsDir(join(__dirname, '..', 'src', 'views'));
  app.setViewEngine('ejs');

  await app.listen(5001);
}

bootstrap();

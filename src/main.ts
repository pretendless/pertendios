import { NestFactory } from '@nestjs/core';
import { Console } from 'console';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  require('dotenv').config();
  var DPort= process.env.PORT;
  if(!DPort)
  {
    DPort = '8525';
  }
  await app.listen(DPort);
}
bootstrap();

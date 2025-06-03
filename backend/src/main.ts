import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Activa la validación para todos los DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // elimina propiedades no definidas en DTOs
    forbidNonWhitelisted: true, // lanza error si envían propiedades extras
    transform: true, // convierte tipos (por ejemplo strings a number)
  }));

  await app.listen(3000);
}
bootstrap();


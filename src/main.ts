import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const catDocument = new DocumentBuilder()
    .setTitle('Cats API Documentation')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, catDocument);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();

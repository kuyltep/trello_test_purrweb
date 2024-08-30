import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      skipNullProperties: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Trello API')
    .setDescription('Trello API description')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'Bearer', in: 'header' }, 'auth')
    .addTag('trello')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port || 3000);
}
bootstrap();

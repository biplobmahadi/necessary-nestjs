import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ResponseDto } from './dtos/response.dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Necessary Nestjs')
    .setDescription('The necessary nestjs API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [ResponseDto],
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(5000, () => {
    console.log('App running...');
  });
}
bootstrap();

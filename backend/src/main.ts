import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 설정
  app.enableCors({
    origin: '*',
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);

  console.log(`🚀 GraphQL server ready at http://localhost:3000/graphql`);
  console.log(
    `🔍 Apollo Studio Explorer available at http://localhost:3000/graphql`,
  );
}
bootstrap();

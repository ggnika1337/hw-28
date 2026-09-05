import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// თქვენი ამოცანაა შექმნათ ნესტის ახალი პროექტი და დააიმპლემენტიროთ შემდეგი ფუნქციონალი:
// 1) გააკეტეთ ფილმების ქრადი, რომელსაც ფილმის ფროფერთიებთან ერთად ექნება director ანუ რეჟისორის ობეიქტი.
// 2) შექმენით რეჟისორების ქრადი რომელსაც რეჟისორის ფროფერთიებტან ერთად ექნება films მასივი სადაც ყველა პოსტი იქნება.

// დაგჭირდებატ შემდგი ბიბლიოთეკები: npm install --save @nestjs/typeorm typeorm mysql2 class-validator class-transformer @nestjs/config

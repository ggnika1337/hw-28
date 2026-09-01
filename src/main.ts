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
// 3) უნდა გამოიყენოთ SQL, TypeORM.
// 4) დაადეთ, ფეჯინეიშენი ორივე მიდლვეარს.
// 5) დაადეთ ფილტრები ორივე მიდლვეარს მაგალითად, სერჩი სახელის მიხედვით, ჟანრის მიხედვით, წელი და ა.შ. მაგალითად: /movies?genre=comedy&yearFrom=2002&yearTo=2010&name=hang

// დაგჭირდებატ შემდგი ბიბლიოთეკები: npm install --save @nestjs/typeorm typeorm mysql2 class-validator class-transformer @nestjs/config

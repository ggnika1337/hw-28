import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateFilmDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  genre: string;

  @IsNotEmpty()
  @IsDate()
  year: Date;

  @IsNotEmpty()
  @IsString()
  director: string;
}

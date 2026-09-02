import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Director } from './entities/director.entity';

@Injectable()
export class DirectorsService {
  constructor(
    @InjectRepository(Director) private directorRepo: Repository<Director>,
  ) {}

  create(dto: CreateDirectorDto) {
    const director = this.directorRepo.create(dto);
    return this.directorRepo.save(director);
  }

  findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;

    return this.directorRepo.find({
      skip,
      take: limit,
    });
  }

  findOne(id: string) {
    return `This action returns a #${id} director`;
  }

  update(id: string, updateDirectorDto: UpdateDirectorDto) {
    return `This action updates a #${id} director`;
  }

  async remove(id: string) {
    const existDirector = await this.directorRepo.findOneBy({
      id,
    });
    if (!existDirector) {
      throw new BadRequestException('Film not found.');
    }
    await this.directorRepo.delete({ id });
    return existDirector;
  }
}

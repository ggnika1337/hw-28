import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export class Director {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  age: number;
}

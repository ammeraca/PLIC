import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Riddle } from './riddle.entity';

@Entity()
export class Destination {
  @PrimaryColumn()
  id: number;

  @Column()
  path: string;

  @Column()
  longitude: number;

  @Column()
  latitude: number;

  @OneToMany((type) => Riddle, (riddle) => riddle.destination)
  riddle: Riddle;
}

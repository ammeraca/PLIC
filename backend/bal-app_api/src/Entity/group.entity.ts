import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Parcours } from './parcours.entity';
import { Riddle } from './riddle.entity';

@Entity()
export class Group {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  parcoursId: number;

  @Column()
  riddleId: number;

  @ManyToOne((type) => Parcours, (parcours) => parcours.group)
  parcours: Parcours;

  @ManyToOne((type) => Riddle, (riddle) => riddle.group)
  riddle: Riddle;
}

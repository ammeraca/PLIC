import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm';
import { Group } from './group.entity';
import { Riddle } from './riddle.entity';

@Entity()
export class Parcours {
  @PrimaryColumn()
  id: number;

  @Column()
  type: string;

  @OneToMany((type) => Riddle, (riddle) => riddle.parcours)
  riddle: Riddle;

  @OneToMany((type) => Group, (group) => group.parcours)
  group: Group;
}

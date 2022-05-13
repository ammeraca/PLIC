import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryColumn, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Messages } from './messages.entity';
import { Parcours } from './parcours.entity';
import { Riddle } from './riddle.entity';
import { User } from './user.entity';

@Entity()
export class Group {
  @ApiProperty()
  @PrimaryColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  parcoursId: number;

  @ApiProperty()
  @Column()
  riddleId: number;

  @ManyToOne((type) => Parcours, (parcours) => parcours.group)
  parcours: Parcours;

  @ManyToOne((type) => Riddle, (riddle) => riddle.group)
  riddle: Riddle;

  @OneToMany((type) => Messages, (message) => message.group)
  messages: Messages[]

  @ManyToMany((type) => User, (user) => user.groups)
  users: User[]
}
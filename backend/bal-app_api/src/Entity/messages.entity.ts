import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryColumn, ManyToOne, ManyToMany } from 'typeorm';
import { Group } from './group.entity';
import { Parcours } from './parcours.entity';
import { Riddle } from './riddle.entity';
import { User } from './user.entity';

@Entity()
export class Messages {
  @ApiProperty()
  @PrimaryColumn()
  id: number;

  @ApiProperty()
  @Column()
  message: string;

  @ApiProperty()
  @Column()
  groupId: number;

  @ApiProperty()
  @Column()
  userId: number;

  @ManyToOne((type) => Group, (group) => group.messages)
  group: Group;

  @ManyToOne((type) => User, (user) => user.messages)
  user: User;
}
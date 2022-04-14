import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { Parcours } from './parcours.entity';
import { Group } from './group.entity';

@Entity()
export class Riddle {
  @PrimaryColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  parcoursId: number;

  @Column()
  destination_id: number;

  @Column()
  achievement_id: number;

  @ManyToOne((type) => Parcours, (parcours) => parcours.riddle)
  parcours: Parcours;

  @OneToMany((type) => Group, (group) => group.riddle)
  group: Group;
}

import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { Parcours } from './parcours.entity';
import { Group } from './group.entity';
import { Deserializer } from 'v8';
import { Destination } from './destination.entity';

@Entity()
export class Riddle {
  @PrimaryColumn()
  id: number;

  @Column()
  text: string;

  @Column()
  parcoursId: number;

  @Column()
  destinationId: number;

  @Column()
  achievementId: number;

  @ManyToOne((type) => Parcours, (parcours) => parcours.riddle)
  parcours: Parcours;

  @OneToMany((type) => Group, (group) => group.riddle)
  group: Group;

  @ManyToOne((type) => Destination, (destination) => destination.riddle)
  destination: Destination;
}

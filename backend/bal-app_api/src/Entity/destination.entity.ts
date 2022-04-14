import { Entity, Column, PrimaryColumn } from 'typeorm';

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
}

import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Achivement {
  @PrimaryColumn()
  id: number;

  @Column()
  path: string;
}

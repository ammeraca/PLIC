import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Username {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;
}

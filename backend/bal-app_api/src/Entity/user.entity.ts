import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Group } from "./group.entity";

@Entity()
export class User {
  @ApiProperty()
  @PrimaryColumn()
  id: number;

  @ApiProperty()
  @Column()
  username: string;

  @ApiProperty()
  @Column()
  email: string;


  @ManyToMany((type) => Group, (group) => group.users)
  @JoinTable()
  groups: Group[]
}
import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Group } from "./group.entity";
import { Messages } from "./messages.entity";

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

  @OneToMany((type) => Messages, (message) => message.group)
  messages: Messages[]

  @ManyToMany((type) => Group, (group) => group.users)
  @JoinTable()
  groups: Group[]
}
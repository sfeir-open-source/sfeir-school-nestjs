import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BeforeUpdate } from "typeorm";
import { IsEmail, isString } from "class-validator";
import * as crypto from 'crypto';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 200 })
  firstname: string;

  @Column("varchar", { length: 200 })
  lastname: string;

  @Column("varchar", { length: 200 })
  @IsEmail()
  email: string;

  @Column("varchar", { length: 200 })
  password: string;

  @Column()
  age: number;
}

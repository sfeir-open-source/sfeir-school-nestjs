import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateUserDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly firstname: string;

  @IsString()
  readonly lastname: string;

  @IsEmail()
  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsNumber()
  readonly age: number;
}

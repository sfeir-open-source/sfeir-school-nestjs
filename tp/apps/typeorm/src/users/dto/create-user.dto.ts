import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly firstname: string;

  @IsNotEmpty()
  @IsString()
  readonly lastname: string;

  @IsEmail()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNumber()
  readonly age: number;
}

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

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

  readonly age: number;
}

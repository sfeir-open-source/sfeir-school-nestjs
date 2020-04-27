import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  readonly id: number;

  @IsString()
  @ApiProperty()
  readonly firstname: string;

  @IsString()
  @ApiProperty()
  readonly lastname: string;

  @IsEmail()
  @IsString()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @ApiProperty()
  readonly password: string;

  @IsNumber()
  @ApiProperty()
  readonly age: number;
}

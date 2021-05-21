import { Equals, IsString } from 'class-validator';

export class TodoDto {
  @Equals(1)
  userId: 1;

  @IsString()
  title: string;

  @Equals(false)
  completed: false;
}

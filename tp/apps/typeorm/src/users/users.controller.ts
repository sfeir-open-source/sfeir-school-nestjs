import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Body,
  Put,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  UseInterceptors
} from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto';
import { User } from "./user.decorator";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('error')
  async error() {
    throw new HttpException(
      {
        status: HttpStatus.NOT_IMPLEMENTED,
        error: 'This is a custom message',
      },
      501,
    );
  }

  @Get('all')
  findAll() {
    const users = this.usersService.findAll();
    return users;
  }

  @Get('email')
  findByEmail(@User('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Get(':id')
  findById(@Param('id', new ParseIntPipe()) id: number) {
    return this.usersService.findById(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}

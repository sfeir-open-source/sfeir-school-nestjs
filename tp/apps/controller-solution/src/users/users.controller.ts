import { Controller, Delete, Get, Param, Post, Put, Query, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return `This action adds a new user : ${JSON.stringify(createUserDto)}`;
  }

  @Get()
  findAll(@Query() query) {
    return `This action returns all users (start: ${query.start}, limit: ${query.limit} items)`;
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return `This action returns a #${id} user`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user : ${JSON.stringify(updateUserDto)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} user`;
  }
}

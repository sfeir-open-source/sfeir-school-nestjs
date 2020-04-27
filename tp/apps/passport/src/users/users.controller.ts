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
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserEntity } from "./user.entity";

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('error')
  @ApiOperation({ summary: 'Get error message' })
  @ApiResponse({
    status: 501,
    description: '.Not Implemented'
  })
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
  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({
    description: 'List of users'
  })
  findAll() {
    const users = this.usersService.findAll();
    return users;
  }

  @Get('email')
  @ApiOperation({ summary: 'Get user by email' })
  @ApiOkResponse({
    description: 'The found user',
    type: UserEntity
  })
  findByEmail(@User('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by email' })
  @ApiOkResponse({
    description: 'The found user',
    type: UserEntity,
  })
  findById(@Param('id', new ParseIntPipe()) id: number) {
    return this.usersService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiOkResponse({ description: 'The created user' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put()
  @ApiOperation({ summary: 'Update user' })
  @ApiOkResponse({ description: 'the updated user' })
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user' })
  @ApiOkResponse()
  delete(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from "./dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./user.entity";

@Injectable()
export class UsersService {

  constructor(@InjectRepository(UserEntity)
              private readonly userRepository: Repository<UserEntity>) {
  }

  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const user = new UserEntity();
    user.firstname = createUserDto.firstname;
    user.lastname = createUserDto.lastname;
    user.email = createUserDto.email;
    user.password = createUserDto.email;
    user.age = createUserDto.age;

    return this.userRepository.save(user);
  }

  async findById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne({ email });
  }

  async findAll() {
    return this.userRepository.find();
  }

  updateUser(updateUserDto: UpdateUserDto) {
    const user = new UserEntity();
    user.id = updateUserDto.id;
    user.firstname = updateUserDto.firstname;
    user.lastname = updateUserDto.lastname;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.age = updateUserDto.age;

    return this.userRepository.save(user);
  }

  async delete(id: number) {
    await this.userRepository.delete(id);
  }
}

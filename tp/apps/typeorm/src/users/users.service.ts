import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from "./dto";
import { UserData } from './user.interface';

@Injectable()
export class UsersService {
  private users: UserData[] = [];

  create(user: CreateUserDto): UserData {
    let newId = this.getRandomInt(9999);
    const userAdd: UserData = {
      id: newId,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      age: user.age
    };
    this.users.push(userAdd);
    return userAdd;
  }

  findById(id: number): UserData {
    const usersFilter = this.users.filter(user => user.id === Number(id));
    return usersFilter.pop();
  }

  findByEmail(email: string): UserData {
    const usersFilter = this.users.filter(user => user.email === email);
    return usersFilter.pop();
  }

  findAll() {
    return this.users;
  }

  updateUser(user: UpdateUserDto) {
    this.users.forEach(obj => {
      if (obj.id === user.id) {
        obj.firstname = user.firstname;
        obj.lastname = user.lastname;
        obj.age = user.age;
      }
    })
    return this.findById(user.id);
  }

  delete(id: number) {
    this.users = this.users.filter(user => user.id != id);
    return this.users;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

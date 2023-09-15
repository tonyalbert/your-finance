import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import prisma from 'src/prisma/Prisma';
import { UUID } from 'crypto';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {

    const { name, email, password } = createUserDto;

    const isEmailExist = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (isEmailExist) {
      return {
        error: true,
        message: 'Email já cadastrado'
      };
    }

    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hash
      }
    });

    return user;
  }

  findAll() {
    const users = prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true
      }
    });

    return users;
  }

  findOne(id: UUID) {
    const user = prisma.user.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });

    if (!user) {
      return "user not found";
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: UUID) {
    const user = prisma.user.delete({
      where: {
        id
      }
    })

    return user;
  }
}

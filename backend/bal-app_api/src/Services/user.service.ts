import { Injectable, Logger, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async getAll() {
    return await this.userRepo.find();
  }

  async getGroup(id: number) {
    return await this.userRepo
    .createQueryBuilder('user')
    .where('user.id = :id', { id: id })
    .getOne();
  }

  async getUsersFromGroup(id: number): Promise<GroupDbo[]> {
    let user = await this.userRepo.createQueryBuilder('user').leftJoinAndSelect('user.groups', 'group').where('user.id = :id', { id: id }).getOne();
    return user.groups;
  }
}

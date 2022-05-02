import { Injectable, Logger, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from 'src/Entity/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(@InjectRepository(Group) private groupRepo: Repository<Group>) {}
  async update(infoForModification) {
    Logger.log('Message');
    const group = await this.groupRepo
      .createQueryBuilder('group')
      .where('group.id = :id', { id: infoForModification.id })
      .getOne();
    Logger.log(group.riddleId);
    group.riddleId = infoForModification.riddleId;
    Logger.log(group.id);
    this.groupRepo.update(infoForModification.id, group);
  }

  async getAll() {
    return await this.groupRepo.find();
  }

  async getGroup(id: number) {
    return await this.groupRepo
    .createQueryBuilder('riddle')
    .where('riddle.id = :id', { id: id })
    .getOne();
  }

  async getUsersFromGroup(id: number): Promise<UserDbo[]>{
    let groups = await this.groupRepo.createQueryBuilder('group').leftJoinAndSelect('group.users', 'user').getMany()
    let users = groups.map(x => x.users)
    return users[0];
  }
}

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
    this.groupRepo.update(infoForModification.id, group)
  }

  async getAll() {
    return await this.groupRepo.find();
  }

  async getGroup(id: number) {
    return await this.groupRepo
    .createQueryBuilder('group')
    .where('group.id = :id', { id: id })
    .getOne();
  }

  async getUsersFromGroup(id: number): Promise<UserDbo[]>{
    let group = await this.groupRepo.createQueryBuilder('group').leftJoinAndSelect('group.users', 'user').where('group.id = :id', { id: id }).getOne()
    return group.users;
  }

  async GetMessagesFromGroup(id: number): Promise<MessagesDbo[]>{
    let group = await this.groupRepo.createQueryBuilder('group').leftJoinAndSelect('group.messages', 'message').where('group.id = :id', { id: id }).getOne()
    return group.messages;
  }
}

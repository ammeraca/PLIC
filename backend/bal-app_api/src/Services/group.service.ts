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
}

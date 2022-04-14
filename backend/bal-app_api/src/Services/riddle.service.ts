import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TextJson } from 'src/class.text';
import { Riddle } from 'src/Entity/riddle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RiddleService {
  constructor(
    @InjectRepository(Riddle) private riddleRepo: Repository<Riddle>,
  ) {}
  findAll(): Promise<Riddle[]> {
    return this.riddleRepo.find();
  }

  findNextRiddle(type: string): Promise<Riddle> {
    const tmp = this.riddleRepo
      .createQueryBuilder('riddle')
      .leftJoinAndSelect('riddle.parcours', 'parcours')
      .where('parcours.type = :type', { type: type })
      .getOne();
    return tmp;
  }
}

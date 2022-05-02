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

  async isRiddleResolved(
    id: number,
    longitude: number,
    latitude: number,
  ): Promise<boolean> {
    const tmp = await this.riddleRepo
      .createQueryBuilder('riddle')
      .leftJoinAndSelect('riddle.destination', 'destination')
      .where('riddle.id = :id', { id: id })
      .getOne();
    if (
      tmp.destination.latitude === latitude &&
      tmp.destination.longitude === longitude
    ) {
      return true;
    }
    return false;
  }
}

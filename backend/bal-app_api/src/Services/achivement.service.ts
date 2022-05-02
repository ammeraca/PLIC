import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Destination } from 'src/Entity/destination.entity';
import { Achivement } from 'src/Entity/achivement.entity';

@Injectable()
export class AchivementService {
  constructor(
    @InjectRepository(Destination)
    private achivementRepo: Repository<Destination>,
  ) {}
  findAll(): Promise<Achivement[]> {
    return this.achivementRepo.find();
  }
}

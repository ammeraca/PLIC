import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Parcours } from 'src/Entity/parcours.entity';

@Injectable()
export class ParcoursService {
  constructor(
    @InjectRepository(Parcours) private parcoursRepo: Repository<Parcours>,
  ) {}
  findAll(): Promise<Parcours[]> {
    return this.parcoursRepo.find();
  }
}

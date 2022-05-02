import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Destination } from 'src/Entity/destination.entity';

@Injectable()
export class DestinationService {
  constructor(
    @InjectRepository(Destination)
    private destinationRepo: Repository<Destination>,
  ) {}
  findAll(): Promise<Destination[]> {
    return this.destinationRepo.find();
  }
}

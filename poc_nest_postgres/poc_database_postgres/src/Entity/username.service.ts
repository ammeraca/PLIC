import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Username } from './username.entity';

@Injectable()
export class UsernameService {
  constructor(
    @InjectRepository(Username) private usernameRepo: Repository<Username>,
  ) {}

  findAll(): Promise<Username[]> {
    return this.usernameRepo.find();
  }

  create(newUsername) {
    this.usernameRepo.insert(newUsername);
  }

  update(usernametoUpdate) {
    this.usernameRepo.update(usernametoUpdate.id, usernametoUpdate);
  }

  delete(id) {
    this.usernameRepo.delete(id);
  }
}

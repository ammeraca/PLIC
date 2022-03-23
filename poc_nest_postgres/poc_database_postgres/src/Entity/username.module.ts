import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsernameController } from './username.controller';
import { Username } from './username.entity';
import { UsernameService } from './username.service';

@Module({
  imports: [TypeOrmModule.forFeature([Username])],
  providers: [UsernameService],
  controllers: [UsernameController],
  exports: [UsernameService],
})
export class UsernameModule {}

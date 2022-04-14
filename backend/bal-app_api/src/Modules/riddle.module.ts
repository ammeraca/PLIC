import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RiddleController } from 'src/Controllers/riddle.controller';
import { Riddle } from 'src/Entity/riddle.entity';
import { RiddleService } from 'src/Services/riddle.service';

@Module({
  imports: [TypeOrmModule.forFeature([Riddle])],
  providers: [RiddleService],
  controllers: [RiddleController],
  exports: [RiddleService],
})
export class RiddleModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Achivement } from 'src/Entity/achivement.entity';
import { AchivementService } from 'src/Services/achivement.service';

@Module({
  imports: [TypeOrmModule.forFeature([Achivement])],
  providers: [AchivementService],
  controllers: [],
  exports: [AchivementService],
})
export class AchievementModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Achivement } from 'src/Entity/achivement.entity';
import { AchivementService } from 'src/Services/achivement.service';

@Module({
  imports: [TypeOrmModule.forFeature([Achivement]), ConfigModule.forRoot()],
  providers: [AchivementService],
  controllers: [],
  exports: [AchivementService],
})
export class AchievementModule {}

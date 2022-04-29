import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorizationModule } from 'src/authorization/authorization.module';
import { RiddleController } from 'src/Controllers/riddle.controller';
import { Riddle } from 'src/Entity/riddle.entity';
import { RiddleService } from 'src/Services/riddle.service';

@Module({
  imports: [
    AuthorizationModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Riddle]),
  ],
  providers: [RiddleService],
  controllers: [RiddleController],
  exports: [RiddleService],
})
export class RiddleModule {}

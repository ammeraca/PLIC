import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parcours } from './Entity/parcours.entity';
import { Riddle } from './Entity/riddle.entity';
import { RiddleModule } from './Modules/riddle.module';
import { GroupModule } from './Modules/group.module';
import { Group } from './Entity/group.entity';
import { Destination } from './Entity/destination.entity';
import { DestinationModule } from './Modules/destination.module';

@Module({
  imports: [
    RiddleModule,
    GroupModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password_poc',
      database: 'BalApp',
      entities: [Riddle, Parcours, Group, Destination],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

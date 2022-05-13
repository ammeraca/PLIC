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
import { AuthorizationModule } from './authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { User } from './Entity/user.entity';
import { UserModule } from './Modules/user.module';
import { Messages } from './Entity/messages.entity';

@Module({
  imports: [
    RiddleModule,
    GroupModule,
    UserModule,
    AuthorizationModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password_poc',
      database: 'BalApp',
      entities: [Riddle, Parcours, Group, Destination, User, Messages],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupController } from 'src/Controllers/group.controller';
import { UserController } from 'src/Controllers/user.controller';
import { Group } from 'src/Entity/group.entity';
import { User } from 'src/Entity/user.entity';
import { GroupService } from 'src/Services/group.service';
import { UserService } from 'src/Services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ConfigModule.forRoot()],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
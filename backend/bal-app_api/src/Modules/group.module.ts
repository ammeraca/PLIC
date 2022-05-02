import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupController } from 'src/Controllers/group.controller';
import { Group } from 'src/Entity/group.entity';
import { GroupService } from 'src/Services/group.service';

@Module({
  imports: [TypeOrmModule.forFeature([Group]), ConfigModule.forRoot()],
  providers: [GroupService],
  controllers: [GroupController],
  exports: [GroupService],
})
export class GroupModule {}

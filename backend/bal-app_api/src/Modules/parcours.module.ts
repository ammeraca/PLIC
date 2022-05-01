import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parcours } from 'src/Entity/parcours.entity';
import { ParcoursService } from 'src/Services/parcours.service';

@Module({
  imports: [TypeOrmModule.forFeature([Parcours]), ConfigModule.forRoot()],
  providers: [ParcoursService],
  controllers: [],
  exports: [ParcoursService],
})
export class ParcoursModule {}

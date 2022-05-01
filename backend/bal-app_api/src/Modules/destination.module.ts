import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DestinationController } from 'src/Controllers/destination.controller';
import { Destination } from 'src/Entity/destination.entity';
import { DestinationService } from 'src/Services/destination.service';

@Module({
  imports: [TypeOrmModule.forFeature([Destination]), ConfigModule.forRoot()],
  providers: [DestinationService],
  controllers: [DestinationController],
  exports: [DestinationService],
})
export class DestinationModule {}

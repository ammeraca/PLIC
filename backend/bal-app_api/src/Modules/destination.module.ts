import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Destination } from 'src/Entity/destination.entity';
import { DestinationService } from 'src/Services/destination.service';

@Module({
  imports: [TypeOrmModule.forFeature([Destination])],
  providers: [DestinationService],
  controllers: [],
  exports: [DestinationService],
})
export class DestinationModule {}

import { Controller, Get } from '@nestjs/common';
import { Destination } from 'src/Entity/destination.entity';
import { DestinationService } from 'src/Services/destination.service';

@Controller('destination')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Get('all')
  async getAll(): Promise<Destination[]> {
    return await this.destinationService.findAll();
  }
}

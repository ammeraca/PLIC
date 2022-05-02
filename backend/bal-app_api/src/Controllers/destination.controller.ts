import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { Destination } from 'src/Entity/destination.entity';
import { DestinationService } from 'src/Services/destination.service';

@Controller('destination')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get('all')
  async getAll(): Promise<Destination[]> {
    return await this.destinationService.findAll();
  }
}

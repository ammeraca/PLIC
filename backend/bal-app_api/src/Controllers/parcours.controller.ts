import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { Parcours } from 'src/Entity/parcours.entity';
import { ParcoursService } from 'src/Services/parcours.service';

@Controller('parcours')
export class ParcoursController {
  constructor(private readonly parcoursService: ParcoursService) {}

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get('')
  async getAll(): Promise<Parcours[]> {
    return await this.parcoursService.findAll();
  }
}

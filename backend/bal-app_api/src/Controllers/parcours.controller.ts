import { Controller, Get } from '@nestjs/common';
import { Parcours } from 'src/Entity/parcours.entity';
import { ParcoursService } from 'src/Services/parcours.service';

@Controller('parcours')
export class ParcoursController {
  constructor(private readonly parcoursService: ParcoursService) {}

  @Get('all')
  async getAll(): Promise<Parcours[]> {
    return await this.parcoursService.findAll();
  }
}

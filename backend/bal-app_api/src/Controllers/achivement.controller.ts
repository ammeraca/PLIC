import { Controller, Get } from '@nestjs/common';
import { Achivement } from 'src/Entity/achivement.entity';
import { AchivementService } from 'src/Services/achivement.service';

@Controller('achivement')
export class AchivementController {
  constructor(private readonly achivementService: AchivementService) {}

  @Get('all')
  async getAll(): Promise<Achivement[]> {
    return await this.achivementService.findAll();
  }
}

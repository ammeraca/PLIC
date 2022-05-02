import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { Achivement } from 'src/Entity/achivement.entity';
import { AchivementService } from 'src/Services/achivement.service';

@Controller('achivement')
export class AchivementController {
  constructor(private readonly achivementService: AchivementService) {}

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get('')
  async getAll(): Promise<Achivement[]> {
    return await this.achivementService.findAll();
  }
}

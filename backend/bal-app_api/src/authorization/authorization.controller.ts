import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { GroupService } from 'src/Services/group.service';
import { AuthorizationService } from './authorization.service';

@Controller('authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Get('')
  @HttpCode(200)
  async updateEmployee() {
    return await this.authorizationService.getToken();
  }
}
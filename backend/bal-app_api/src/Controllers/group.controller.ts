import { Body, Controller, HttpCode, Logger, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { Group } from 'src/Entity/group.entity';
import { GroupService } from 'src/Services/group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Put('')
  @HttpCode(200)
  updateEmployee(@Body() infoForModification: Group) {
    this.groupService.update(infoForModification);
  }
}

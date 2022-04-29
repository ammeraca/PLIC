import { Body, Controller, HttpCode, Logger, Put } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { GroupService } from 'src/Services/group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Put('')
  @HttpCode(200)
  updateEmployee(@Body() infoForModification: any) {
    this.groupService.update(infoForModification);
  }
}

import { Body, Controller, HttpCode, Logger, Put } from '@nestjs/common';
import { GroupService } from 'src/Services/group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Put('update')
  @HttpCode(200)
  updateEmployee(@Body() infoForModification: any) {
    this.groupService.update(infoForModification);
  }
}

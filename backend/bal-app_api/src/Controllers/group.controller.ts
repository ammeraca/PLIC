import { Body, Controller, Get, HttpCode, Logger, Param, Put, UseGuards} from '@nestjs/common';
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

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get('')
  @HttpCode(200)
  getAll() {
    return this.groupService.getAll();
  }

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get(':id')
  @HttpCode(200)
  getGroup(@Param('id') id: number) {
    return this.groupService.getGroup(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get(':id/users')
  @HttpCode(200)
  getUsersFromGroup(@Param('id') id: number) {
    return this.groupService.getUsersFromGroup(id);
  }
}

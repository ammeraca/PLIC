import { Body, Controller, Get, HttpCode, Logger, Param, Put, UseGuards} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { UserService } from 'src/Services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get('')
  @HttpCode(200)
  getAll() {
    return this.userService.getAll();
  }

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get(':id')
  @HttpCode(200)
  getGroup(@Param('id') id: number) {
    return this.userService.getGroup(id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthorizationGuard)
  @Get(':id/users')
  @HttpCode(200)
  getUsersFromGroup(@Param('id') id: number) {
    return this.userService.getUsersFromGroup(id);
  }
}
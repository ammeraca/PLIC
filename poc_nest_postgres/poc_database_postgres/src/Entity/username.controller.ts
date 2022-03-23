import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Delete,
  Param,
} from '@nestjs/common';
import { UsernameService } from './username.service';
import { Username } from './username.entity';

@Controller('username')
export class UsernameController {
  constructor(private readonly usernameService: UsernameService) {}

  @Get('all')
  async getAll(): Promise<Username[]> {
    return await this.usernameService.findAll();
  }

  @Post('add')
  @HttpCode(201)
  createEmployee(@Body() newUsername: any) {
    this.usernameService.create(newUsername);
  }

  @Post('update')
  @HttpCode(200)
  updateEmployee(@Body() usernameToUpdate: any) {
    this.usernameService.update(usernameToUpdate);
  }

  @Delete('delete/:id')
  @HttpCode(200)
  deleteEmployee(@Param('id') id) {
    this.usernameService.delete(id);
  }
}

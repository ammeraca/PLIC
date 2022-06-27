import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagesService } from './messages.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly messagesService: MessagesService,
  ) {}

  @Get()
  getHello(): any {
    return this.messagesService.findAll();
  }

  @Get('hello')
  get() {
    return this.appService.getHello();
  }
}

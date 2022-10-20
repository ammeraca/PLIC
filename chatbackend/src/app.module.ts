import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesGateway } from './messages.gateway';
import { MessagesService } from './messages.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MessagesGateway, MessagesService],
})
export class AppModule {}

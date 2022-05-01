import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AuthorizationController } from './authorization.controller';
import { AuthorizationService } from './authorization.service';

@Module({
    imports: [HttpModule],
    controllers: [AuthorizationController],
    providers: [AuthorizationService],
})
export class AuthorizationModule {}

import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Query,
  Res,
  Logger,
} from '@nestjs/common';
import { Riddle } from 'src/Entity/riddle.entity';
import { RiddleService } from 'src/Services/riddle.service';
import { Response } from 'express';

@Controller('riddle')
export class RiddleController {
  constructor(private readonly riddleService: RiddleService) {}

  @Get('all')
  async getAll(): Promise<Riddle[]> {
    return await this.riddleService.findAll();
  }

  @Get('next_riddle?')
  @HttpCode(200)
  async get_next_riddle(
    @Res({ passthrough: true }) res: Response,
    @Query('type') type: string,
  ) {
    if (type == null) {
      res.status(HttpStatus.BAD_REQUEST).json({
        status: 'BAD REQUEST',
        message: 'missing mandatory argument type',
      });
    }
    const result = await this.riddleService.findNextRiddle(type);
    if (result == null) {
      res.status(HttpStatus.NOT_FOUND).json({
        status: 'NOT FOUND',
        message: 'element not found in database',
      });
    }
    return result;
  }

  @Get('isSolved')
  @HttpCode(200)
  async is_riddle_solved(
    @Res({ passthrough: true }) res: Response,
    @Query('id') id: number,
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
  ) {
    if (id == null || latitude == null || longitude == null) {
      res.status(HttpStatus.BAD_REQUEST).json({
        status: 'BAD REQUEST',
        message: 'missing mandatory argument type',
      });
    }
    const result = await this.riddleService.isRiddleResolved(
      id,
      latitude,
      longitude,
    );
    return result;
  }
}

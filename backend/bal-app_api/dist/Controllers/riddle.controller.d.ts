import { Riddle } from 'src/Entity/riddle.entity';
import { RiddleService } from 'src/Services/riddle.service';
import { Response } from 'express';
export declare class RiddleController {
    private readonly riddleService;
    constructor(riddleService: RiddleService);
    getAll(): Promise<Riddle[]>;
    get_next_riddle(res: Response, type: string): Promise<Riddle>;
    is_riddle_solved(res: Response, id: number, latitude: number, longitude: number): Promise<boolean>;
}

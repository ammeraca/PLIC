import { Riddle } from 'src/Entity/riddle.entity';
import { Repository } from 'typeorm';
export declare class RiddleService {
    private riddleRepo;
    constructor(riddleRepo: Repository<Riddle>);
    findAll(): Promise<Riddle[]>;
    findNextRiddle(type: string): Promise<Riddle>;
    isRiddleResolved(id: number, longitude: number, latitude: number): Promise<boolean>;
}

import { Repository } from 'typeorm';
import { Destination } from 'src/Entity/destination.entity';
import { Achivement } from 'src/Entity/achivement.entity';
export declare class AchivementService {
    private achivementRepo;
    constructor(achivementRepo: Repository<Destination>);
    findAll(): Promise<Achivement[]>;
}

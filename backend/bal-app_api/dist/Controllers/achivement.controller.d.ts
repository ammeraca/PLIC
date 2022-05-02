import { Achivement } from 'src/Entity/achivement.entity';
import { AchivementService } from 'src/Services/achivement.service';
export declare class AchivementController {
    private readonly achivementService;
    constructor(achivementService: AchivementService);
    getAll(): Promise<Achivement[]>;
}

import { Parcours } from 'src/Entity/parcours.entity';
import { ParcoursService } from 'src/Services/parcours.service';
export declare class ParcoursController {
    private readonly parcoursService;
    constructor(parcoursService: ParcoursService);
    getAll(): Promise<Parcours[]>;
}

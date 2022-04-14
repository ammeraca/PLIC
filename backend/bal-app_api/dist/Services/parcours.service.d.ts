import { Repository } from 'typeorm';
import { Parcours } from 'src/Entity/parcours.entity';
export declare class ParcoursService {
    private parcoursRepo;
    constructor(parcoursRepo: Repository<Parcours>);
    findAll(): Promise<Parcours[]>;
}

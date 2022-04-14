import { Repository } from 'typeorm';
import { Destination } from 'src/Entity/destination.entity';
export declare class DestinationService {
    private destinationRepo;
    constructor(destinationRepo: Repository<Destination>);
    findAll(): Promise<Destination[]>;
}

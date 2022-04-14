import { Destination } from 'src/Entity/destination.entity';
import { DestinationService } from 'src/Services/destination.service';
export declare class DestinationController {
    private readonly destinationService;
    constructor(destinationService: DestinationService);
    getAll(): Promise<Destination[]>;
}

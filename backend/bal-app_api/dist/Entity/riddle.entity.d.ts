import { Parcours } from './parcours.entity';
import { Group } from './group.entity';
import { Destination } from './destination.entity';
export declare class Riddle {
    id: number;
    text: string;
    parcoursId: number;
    destinationId: number;
    achievementId: number;
    parcours: Parcours;
    group: Group;
    destination: Destination;
}

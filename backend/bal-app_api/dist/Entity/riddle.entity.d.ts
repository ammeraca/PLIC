import { Parcours } from './parcours.entity';
import { Group } from './group.entity';
export declare class Riddle {
    id: number;
    text: string;
    parcoursId: number;
    destination_id: number;
    achievement_id: number;
    parcours: Parcours;
    group: Group;
}

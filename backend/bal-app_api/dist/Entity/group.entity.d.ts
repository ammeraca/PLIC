import { Parcours } from './parcours.entity';
import { Riddle } from './riddle.entity';
export declare class Group {
    id: number;
    name: string;
    parcoursId: number;
    riddleId: number;
    parcours: Parcours;
    riddle: Riddle;
}

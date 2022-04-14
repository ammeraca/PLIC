import { Group } from './group.entity';
import { Riddle } from './riddle.entity';
export declare class Parcours {
    id: number;
    type: string;
    riddle: Riddle;
    group: Group;
}

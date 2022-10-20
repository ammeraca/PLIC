import { Riddle } from './riddle.entity';
export declare class Destination {
    id: number;
    path: string;
    longitude: number;
    latitude: number;
    riddle: Riddle;
}
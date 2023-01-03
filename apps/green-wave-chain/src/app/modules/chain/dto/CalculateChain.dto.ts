import { RoadPoint } from '../../../types';

export class CalculateChainDto {
    defaultSpeed: number;
    defaultDelay: number;
    defaultWarningDelay: number;
    roadPoints: RoadPoint[];
}

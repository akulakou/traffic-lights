export interface RoadPoint {
    speed?: number;
    distance: number;
    accelerationTime: number;
    breakingTime: number;
    delay?: number;
    warningDelay?: number;
}

export interface CalculateDelaysConfig {
    defaultDelay: number;
    defaultWarningDelay: number;
    defaultSpeed: number;
}


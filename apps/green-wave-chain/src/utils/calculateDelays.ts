import { CalculatedChainDto } from '../app/modules/chain/dto/CalculatedChain.dto';
import {
    CalculateDelaysConfig,
    RoadPoint,
} from '../app/types';

export const calculateGreenDelay = (
    {
        distance,
        speed,
    }: RoadPoint,
    defaultSpeed: number,
): number => {
    return distance / (speed ?? defaultSpeed);
};

export const calculateYellowDelay = (
    {
        delay = 0,
    }: RoadPoint,
    greenDelay: number,
): number => {
    return greenDelay + delay;
};

export const calculateRedDelay = (
    {
        warningDelay = 0,
    }: RoadPoint,
    yellowDelay: number,
): number => {
    return yellowDelay + warningDelay;
};

export const calculateDelays = (
    roadPoint: RoadPoint,
    index: number,
    roadPointsArray: RoadPoint[],
    {
        defaultDelay,
        defaultWarningDelay,
        defaultSpeed,
    }: CalculateDelaysConfig,
): CalculatedChainDto => {
    let green = 0;

    if (index > 0) {
        green = calculateGreenDelay(
            roadPoint,
            defaultSpeed,
        ) + (index === 1 ? roadPoint.accelerationTime : 0);
    }

    const yellow = calculateYellowDelay(
        {
            ...roadPoint,
            delay: roadPoint.delay ? roadPoint.delay : defaultDelay,
        },
        green - (index === roadPointsArray.length - 1 ? roadPoint.breakingTime : 0),
    );

    const red = calculateRedDelay(
        {
            ...roadPoint,
            warningDelay: roadPoint.warningDelay ? roadPoint.warningDelay : defaultWarningDelay,
        },

        yellow,
    );

    return {
        yellow,
        green,
        red,
    };
};

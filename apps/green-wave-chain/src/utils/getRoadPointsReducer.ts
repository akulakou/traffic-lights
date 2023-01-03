import { CalculatedChainDto } from '../app/modules/chain/dto/CalculatedChain.dto';
import {
    CalculateDelaysConfig,
    RoadPoint,
} from '../app/types';
import { calculateDelays } from './calculateDelays';

export const getRoadPointsReducer = (
    {
        defaultDelay,
        defaultWarningDelay,
        defaultSpeed,
    }: CalculateDelaysConfig,
) => (result: CalculatedChainDto[], roadPoint: RoadPoint, index: number, roadPointsArray: RoadPoint[]) => {
    const delays = result[result.length - 1] || {
        yellow: 0,
        green: 0,
        red: 0,
    };

    const calculatedDelays = calculateDelays(roadPoint, index, roadPointsArray, {
        defaultDelay,
        defaultWarningDelay,
        defaultSpeed,
    });

    const newItem = {
        yellow: delays.yellow + calculatedDelays.yellow,
        green: delays.green + calculatedDelays.green,
        red: delays.red + calculatedDelays.red,
    };

    return [...result, newItem];
};

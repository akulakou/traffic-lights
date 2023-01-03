import { Injectable } from '@nestjs/common';
import { getRoadPointsReducer } from 'apps/green-wave-chain/src/utils/getRoadPointsReducer';
import { CalculateChainDto } from './dto/CalculateChain.dto';
import { CalculatedChainDto } from './dto/CalculatedChain.dto';

@Injectable()
export class ChainService {
    calculate({
        defaultDelay = 5000,
        defaultSpeed = 0.01,
        defaultWarningDelay = 3000,
        roadPoints,
    }: CalculateChainDto): CalculatedChainDto[] {
        return roadPoints.reduce(
            getRoadPointsReducer({
                defaultDelay,
                defaultSpeed,
                defaultWarningDelay,
            }),
            [],
        );
    }
}

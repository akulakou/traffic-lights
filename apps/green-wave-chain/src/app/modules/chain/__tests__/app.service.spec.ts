import { Test } from '@nestjs/testing';
import { roadPoint } from 'apps/green-wave-chain/src/utils/__data__/roadPoint';

import { ChainService } from '../chain.service';

describe('ChainService', () => {
    let service: ChainService;

    beforeAll(async () => {
        const module = await Test.createTestingModule({
            providers: [ChainService],
        }).compile();

        service = module.get<ChainService>(ChainService);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    afterAll(() => {
        jest.restoreAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('calculate()', () => {
        it('should return "Welcome to green-wave-chain!"', () => {
            const expectedResult = [
                { yellow: 5000, green: 0, red: 7000 },
                { yellow: 47000, green: 39000, red: 51000 },
            ];
            const result = service.calculate({
                defaultDelay: 5000,
                defaultSpeed: 0.01,
                defaultWarningDelay: 3000,
                roadPoints: [
                    roadPoint,
                    roadPoint,
                ],
            });

            expect(result).toStrictEqual(expectedResult);
        });
    });
});

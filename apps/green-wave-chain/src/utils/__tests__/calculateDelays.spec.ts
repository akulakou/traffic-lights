import { RoadPoint } from '../../app/types';
import {
    calculateDelays,
    calculateGreenDelay,
    calculateYellowDelay,
    calculateRedDelay,
} from '../calculateDelays';
import { roadPoint } from '../__data__/roadPoint';

describe('calculateYellowDelay()', () => {
    it('should return expected number value', () => {
        const expectedResult = 5000;
        const result = calculateYellowDelay(
            {
                delay: 1000,
            } as RoadPoint,
            4000,
        );

        expect(result).toBe(expectedResult);

    });
});

describe('calculateGreenDelay()', () => {
    it('should return expected number value', () => {
        const expectedResult = 36000;
        const result = calculateGreenDelay(
            roadPoint,
            10,
        );

        expect(result).toBe(expectedResult);

    });
});

describe('calculateRedDelay()', () => {
    it('should return expected number value', () => {
        const expectedResult = 10000;
        const result = calculateRedDelay(
            {
                warningDelay: 2000,
            } as RoadPoint,
            8000,
        );

        expect(result).toBe(expectedResult);

    });
});

describe('calculateDelays()', () => {
    it('should return expected number values (index = 0)', () => {
        const expectedResult = { yellow: 5000, green: 0, red: 7000 };

        const result = calculateDelays(
            roadPoint,
            0,
            [
                roadPoint,
                roadPoint,
            ],
            {
                defaultDelay: 5000,
                defaultWarningDelay: 2000,
                defaultSpeed: 360,
            },
        );

        expect(result).toStrictEqual(expectedResult);
    });

    it('should return expected number values (index > 0)', () => {
        const expectedResult = { yellow: 42000, green: 39000, red: 44000 };

        const result = calculateDelays(
            roadPoint,
            1,
            [
                roadPoint,
                roadPoint,
            ],
            {
                defaultDelay: 5000,
                defaultWarningDelay: 2000,
                defaultSpeed: 360,
            },
        );

        expect(result).toStrictEqual(expectedResult);
    });
});

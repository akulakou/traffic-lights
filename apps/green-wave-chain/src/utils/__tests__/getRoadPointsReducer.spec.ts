import { RoadPoint } from '../../app/types';
import { getRoadPointsReducer } from '../getRoadPointsReducer';
import { roadPoint } from '../__data__/roadPoint';

describe('getRoadPointsReducer()', () => {
    it('should return [{yellow: 5000, green: 0, red: 7000}]', () => {
        const expectedResult = [{ yellow: 5000, green: 0, red: 7000 }];
        const roadPointsReducer = getRoadPointsReducer({
            defaultDelay: 2000,
            defaultSpeed: 10,
            defaultWarningDelay: 1000,
        });

        const result = roadPointsReducer(
            [],
            roadPoint,
            0,
            [
                roadPoint,
                roadPoint,
            ],
        );

        expect(result).toStrictEqual(expectedResult);
    });
});

import {
    ValidationError,
    BadRequestError,
    UnauthorizedError,
    NotFoundError,
} from '../errors';

describe('errors.urils', () => {
    it('ValidationError', () => {
        const error = new ValidationError('some error');

        expect(error.status).toBe(400);
    });

    it('BadRequestError', () => {
        const error = new BadRequestError('some error');

        expect(error.status).toBe(400);
    });

    it('UnauthorizedError', () => {
        const error = new UnauthorizedError('some error');

        expect(error.status).toBe(401);
    });

    it('NotFoundError', () => {
        const error = new NotFoundError('some error');

        expect(error.status).toBe(404);
    });
});

/* eslint-disable max-classes-per-file */

class ValidationError extends Error {
    readonly status: number = 400;

    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class BadRequestError extends Error {
    readonly status: number = 400;

    constructor(message: string) {
        super(message);
        this.name = 'Bad Request';
    }
}

class UnauthorizedError extends Error {
    readonly status: number = 401;

    constructor(message: string) {
        super(message);
        this.name = 'Unauthorized';
    }
}

class NotFoundError extends Error {
    readonly status: number = 404;

    constructor(message: string) {
        super(message);
        this.name = 'URL Not Found';
        this.message = `Not found - ${this.message}`;
    }
}

export { ValidationError, BadRequestError, UnauthorizedError, NotFoundError };

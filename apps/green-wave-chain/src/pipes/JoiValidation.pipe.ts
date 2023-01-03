import {
    PipeTransform,
    Injectable,
    ArgumentMetadata,
    Paramtype,
} from '@nestjs/common';
import { Schema } from 'joi';
import { ValidationError } from '../utils/errors';

export enum JoiValidationType {
    BODY = 'body',
    PARAM = 'param',
    QUERY = 'query'
}

  @Injectable()
export class JoiValidationPipe implements PipeTransform {
    constructor(
        private schema: Schema,
        private type: Paramtype = JoiValidationType.BODY,
    ) {}

    transform(value: any, metadata: ArgumentMetadata) {
        if (this.type !== metadata.type) {
            return value;
        }

        const { error } = this.schema.validate(value, {
            abortEarly: false,
        });

        if (error) {
            throw new ValidationError(error.message.replace(/"/g, "'"));
        }

        return value;
    }
}

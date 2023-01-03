import Joi = require('joi');

export const ChainSchema = Joi.object({
    defaultDelay: Joi.number(),
    defaultSpeed: Joi.number(),
    defaultWarningDelay: Joi.number(),
    roadPoints: Joi.array().items(
        Joi.object({
            accelerationTime: Joi.number().required(),
            breakingTime: Joi.number().required(),
            delay: Joi.number(),
            distance: Joi.number().required(),
            speed: Joi.number(),
            warningDelay: Joi.number(),
        }),
    ).min(2).required(),

});

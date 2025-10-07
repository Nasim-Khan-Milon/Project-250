const Joi = require("joi");

const appointmentValidationSchema = Joi.object({
    scheduleId: Joi.string().required().messages({
        "any.required": "Schedule ID is required",
        "string.base": "Schedule ID must be a string"
    })
});

const scheduleValidationSchema = Joi.object({
    date: Joi.date()
        .required()
        .messages({
            "any.required": "Schedule date is required",
            "date.base": "Invalid date format"
        }),

    shift: Joi.string()
        .required()
        .messages({
            "any.required": "Shift is required",
            "string.base": "Shift must be a string"
        }),
});

module.exports = { appointmentValidationSchema, scheduleValidationSchema };

const {appointmentValidationSchema, scheduleValidationSchema} = require("./schema.js");
const ExpressError = require("./utils/ExpressError");

module.exports.validateAppointment = (req, res, next) => {
    let {error} = appointmentValidationSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports.validateSchedule = (req, res, next) => {
    let {error} = scheduleValidationSchema.validate(req.body.schedules);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};
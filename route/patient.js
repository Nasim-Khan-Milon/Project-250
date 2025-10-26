const express = require("express");
const router = express.Router();
const Schedule = require("../models/schedules.js");
const Appointment = require("../models/appointments.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { validateAppointment } = require("../middleware.js");



//Home Route
router.get("/", async (req, res) => {
    const today = new Date();
    // Delete schedules where date is in the past
    await Schedule.deleteMany({ date: { $lte: today } });
    const allSchedules = await Schedule.find({});
    res.render("patient/patientHome", {allSchedules});
});

//Appointment Post Route
router.post("/appointment", validateAppointment, wrapAsync( async (req, res) => {
    const {scheduleId} = req.body;
    if(!scheduleId){
        throw new ExpressError(400, "Send validate data for appointment");
    }
    const schedule = await Schedule.findById(scheduleId);
    const { date, shift } = schedule;
    let newAppointment = await new Appointment({date, shift});
    await newAppointment.save();
    req.flash("success", "Appointment successfully sumbited!");
    res.redirect("/patient/home");
}));

//Appointment Submited Route
router.get("/submited-appointment", wrapAsync( (req, res) => {
    const { name } = req.query;
    res.render("patient/submited-appointment", { name });
}));

//Contact Route
router.get("/contact", (req, res) => {
    res.render("patient/contact");
});

//Paftient Profile Route
router.get("/profile", (req, res) => {
    res.render("patient/profile");
});

//Log In Route
router.get("/login", (req, res) => {
    res.render("patient/login");
});

//Sing Up Route
router.get("/signup", (req, res) => {
    res.render("patient/signup");
});

// Forgot Password Route
router.get("/forgotPassword", (req, res) => {
    res.render("patient/forgotPassword");
});




module.exports = router;
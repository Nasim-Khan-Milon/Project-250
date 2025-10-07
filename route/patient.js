const express = require("express");
const router = express.Router();
const Schedule = require("../models/schedules.js");
const Apointment = require("../models/appointments.js");
const appointments = require("../models/appointments.js");


//Home Route
router.get("/", async (req, res) => {
    const allSchedules = await Schedule.find({});
    res.render("patient/patientHome", {allSchedules});
});

//Apointment Post Route
router.post("/appointment", async (req, res) => {
    const {scheduleId} = req.body;
    const schedule = await Schedule.findById(scheduleId);
    const { date, shift } = schedule;
    let newAppointment = await new Apointment({date, shift});
    await newAppointment.save();
    res.redirect("/patient/home");
});

//Apointment Submited Route
router.get("/submited-appointment", (req, res) => {
    const { name } = req.query;
    res.render("patient/submited-appointment", { name });
});

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
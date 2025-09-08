const express = require("express");
const router = express.Router();
const Schedule = require("../models/schedules.js");


//Home Route
router.get("/", async (req, res) => {
    const allSchedules = await Schedule.find({});
    res.render("patient/patientHome", {allSchedules});
});

//Apointment Route
router.get("/appointment", (req, res) => {
    res.render("patient/appointment");
});

//Contact Route
router.get("/contact", (req, res) => {
    res.render("patient/contact");
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
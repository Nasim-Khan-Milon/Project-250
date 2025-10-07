const express = require("express");
const router = express.Router();
const Schedule = require("../models/schedules");
const Appointment = require("../models/appointments.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { validateSchedule } = require("../middleware.js");

//Dashboard Route
router.get("/", (req, res) => {
    res.render("doctor/dashboard");
});


//Availability Page

//availability Route
router.get("/availability", wrapAsync(async (req, res) => {
    const today = new Date();
    // Delete schedules where date is in the past
    await Schedule.deleteMany({ date: { $lte: today } });
    const allSchedules = await Schedule.find({});
    res.render("doctor/availability", { allSchedules });
}));

//Post route to Availability Page
router.post("/availability", validateSchedule, wrapAsync(async (req, res) => {

    let newSchedule = await new Schedule(req.body.schedules);
    await newSchedule.save();
    res.redirect("/doctor/dashboard/availability");
}));

//Delete route to delete Schedules
router.delete("/availability/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Schedule.findByIdAndDelete(id);
    res.redirect("/doctor/dashboard/availability");
}));


//Doctor Appointment Page

//Appointment List Route
router.get("/appointment", wrapAsync(async (req, res) => {
    const today = new Date();
    await Appointment.updateMany(
        { date: { $lt: today }, status: "Confirmed" },
        { $set: { status: "Cancelled" } }
    );
    let allAppointment = await Appointment.find({});
    res.render("doctor/doctor-appointments", { allAppointment });
}));

//Appointment Post Route
router.post("/appointment/:id/seen", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    appointment.status = "Completed";
    await appointment.save();
    res.redirect("/doctor/dashboard/appointment");
}));


//Pending Appointment Page

//Pending Appointment List Route
router.get("/pendingappointment", wrapAsync(async (req, res) => {
    const today = new Date();
    await Appointment.updateMany(
        { date: { $lt: today }, status: "Pending" },
        { $set: { status: "Cancelled" } }
    );
    let allAppointment = await Appointment.find({});
    res.render("doctor/pending-appointment", { allAppointment });
}));

//Confirm Post Route
router.post("/pendingappointment/:id/confirm", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    appointment.status = "Confirmed";
    await appointment.save();
    res.redirect("/doctor/dashboard/pendingappointment");
}));

//Reject Post Route
router.post("/pendingappointment/:id/reject", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    appointment.status = "Cancelled";
    await appointment.save();
    res.redirect("/doctor/dashboard/pendingappointment");
}));



//Previously Viewed Patient List Route
router.get("/patients", (req, res) => {
    res.render("doctor/patients");
});

//Previously Viewed Patient Details Route
router.get("/patients/patient-details", (req, res) => {
    res.render("doctor/patient-details");
});

//Dotor Profile Route
router.get("/profile", (req, res) => {
    res.render("doctor/profile");
});

//Dotor Profile Edit Route
router.get("/profile/editProfile", (req, res) => {
    res.render("doctor/edit-profile");
});

//Log In Route
router.get("/login", (req, res) => {
    res.render("doctor/login");
});

//Sign Up Route
router.get("/signup", (req, res) => {
    res.render("doctor/signup");
});

//Forgot Password Route
router.get("/forgotPassword", (req, res) => {
    res.render("doctor/forgot-password");
});



module.exports = router;
const express = require("express");
const router = express.Router();
const Schedule = require("../models/schedules");

//Dashboard Route
router.get("/", (req, res) => {
    res.render("doctor/dashboard");
});

//availability Route
router.get("/availability", async (req, res) => {
    const allSchedules = await Schedule.find({});
    res.render("doctor/availability", {allSchedules});
});

//Post route to Availability Page
router.post("/availability", async(req, res) => {
    let newSchedule = await new Schedule(req.body.schedules);
    await newSchedule.save();
    res.redirect("/doctor/dashboard/availability");
});

//Delete route to delete Schedules
router.delete("/availability/:id", async (req, res) => {
    const { id } = req.params;
    await Schedule.findByIdAndDelete(id);
    res.redirect("/doctor/dashboard/availability");
});

//Appointment List Route
router.get("/appointment", (req, res) => {
    res.render("doctor/doctor-appointments");
});

//Pending Appointment List Route
router.get("/pendingappointment", (req, res) => {
    res.render("doctor/pending-appointment");
});

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
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

module.exports = router;
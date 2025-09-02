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




module.exports = router;
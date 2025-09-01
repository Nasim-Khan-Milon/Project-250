const express = require("express");
const router = express.Router();


//Home Route
router.get("/", (req, res) => {
    res.render("patient/patientHome");
});

//Apointment Route
router.get("/appointment", (req, res) => {
    res.render("patient/appointment");
});




module.exports = router;
const express = require("express");
const router = express.Router();

//Dashboard Route
router.get("/", (req, res) => {
    res.render("doctor/dashboard");
});

//availability Route
router.get("/availability", (req, res) => {
    res.render("doctor/availability");
});

module.exports = router;
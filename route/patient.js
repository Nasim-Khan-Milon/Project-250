const express = require("express");
const router = express.Router();


//Home Route
router.get("/", (req, res) => {
    res.render("patient/patientHome");
});




module.exports = router;
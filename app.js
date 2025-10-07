const express = require("express");
const app = express();


const mongoose = require("mongoose");

const ejs = require("ejs");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//for ejs-mate
const ejsMate = require("ejs-mate");
// use ejs-locals for all ejs templates:
app.engine('ejs', ejsMate);

//For Edit and Delete use Method Override
const methodOverride = require('method-override');
app.use(methodOverride('_method'))


const patient = require("./route/patient.js");
const doctor = require("./route/doctor.js");
const ExpressError = require("./utils/ExpressError.js");


//for use static file -> css and js file in public folder
app.use(express.static(path.join(__dirname, "/public")));

const port = 8080;


app.use(express.urlencoded({extended: true}));

const MONGO_URL = "mongodb://127.0.0.1:27017/doctor_appointment_system";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}


//For patient pages
app.use("/patient/home", patient);

//For doctor pages
app.use("/doctor/dashboard", doctor);


app.get("/", (req, res) => {
    res.send("Hi, I am root");
});


app.use((req, res, next) => {
  next(new ExpressError(400, "Page not found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("patient/error.ejs", {message});
});

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});

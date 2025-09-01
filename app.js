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


const patient = require("./route/patient.js");


//for use static file -> css and js file in public folder
app.use(express.static(path.join(__dirname, "/public")));

const port = 8080;


app.use(express.urlencoded({extended: true}));

const MONGO_URL = "mongodb://127.0.0.1:27017/appointment";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}


//For patient pages
app.use("/home", patient);


app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});

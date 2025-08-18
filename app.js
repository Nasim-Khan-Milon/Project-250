const express = require("express");
const app = express();

const mongoose = require("mongoose");

const ejs = require("ejs");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


//for use static file -> css and js file in public folder
app.use(express.static(path.join(__dirname, "/public")));

const port = 8080;


app.use(express.urlencoded({extended: true}));  

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(MONGO_URL);
}


//Home Route for Patient
app.get("/home", (req, res) => {
    res.render("patient/home");
});


app.get("/", (req, res) => {
    res.send("Hi, I am root");
});

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});

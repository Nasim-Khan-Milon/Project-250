const mongoose = require("mongoose");
const initData = require("./data.js");
const Schedule = require("../models/schedules.js");
const Appointment = require("../models/appointments.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/doctor_appointment_system";

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = (async () => {
    await Schedule.deleteMany({});
    await Schedule.insertMany(initData.schedule);
    await Appointment.deleteMany({});
    await Appointment.insertMany(initData.appointment);
    console.log("data was initialized");
});

initDB();
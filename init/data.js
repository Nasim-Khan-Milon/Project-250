const schedules = require("../models/schedules");

const sampleShedules = [
    {
        date: new Date("2025-09-01"), 
        start_time: "09:00 AM",
        end_time: "12:00 PM"
    },
    {
        date: new Date("2025-09-02"), 
        start_time: "02:00 PM",
        end_time: "05:00 PM"
    },
    {
        date: new Date("2025-09-04"), 
        start_time: "10:30 AM",
        end_time: "01:00 PM"
    },
    {
        date: new Date("2025-09-05"), 
        start_time: "09:00 AM",
        end_time: "11:30 AM"
    },
    {
        date: new Date("2025-09-07"), 
        start_time: "03:00 PM",
        end_time: "06:00 PM"
    },
    {
        date: new Date("2025-09-08"), 
        start_time: "08:30 AM",
        end_time: "12:30 PM"
    }
];






module.exports = { schedule: sampleShedules };
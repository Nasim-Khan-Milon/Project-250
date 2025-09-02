const schedules = require("../models/schedules");

const sampleShedules = [
    {
        day_of_week: "Mon",
        start_time: "09:00 AM",
        end_time: "01:00 PM",
        is_active: true,
    },
    {
        day_of_week: "Wed",
        start_time: "02:00 PM",
        end_time: "06:00 PM",
        is_active: true,
    },
    {
        day_of_week: "Tue",
        start_time: "10:00 AM",
        end_time: "01:00 PM",
        is_active: true,
    },
    {
        day_of_week: "Fri",
        start_time: "04:00 PM",
        end_time: "08:00 PM",
        is_active: true,
    },
    {
        day_of_week: "Thu",
        start_time: "09:30 AM",
        end_time: "12:30 PM",
        is_active: true,
    },
    {
        day_of_week: "Sat",
        start_time: "10:00 AM",
        end_time: "02:00 PM",
        is_active: true,
    },
];





module.exports = { schedule: sampleShedules };
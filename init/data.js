const appointments = require("../models/appointments");
const schedules = require("../models/schedules");

const sampleShedules = [
    {
        date: new Date("2025-09-01"),
        shift: "Morning",
    },
    {
        date: new Date("2025-09-01"),
        shift: "Evening",
    },
    {
        date: new Date("2025-09-02"),
        shift: "Morning",
    },
    {
        date: new Date("2025-09-02"),
        shift: "Evening",
    },
    {
        date: new Date("2025-09-04"),
        shift: "Morning",
    },
    {
        date: new Date("2025-09-04"),
        shift: "Evening",
    }
];

const sampleAppointments = [
    {
        "date": "2025-10-05T09:30:00Z",
        "shift": "Morning",
        "status": "Pending",
        "created_at": "2025-09-29T08:12:00Z"
    },
    {
        "date": "2025-10-05T15:00:00Z",
        "shift": "Evening",
        "status": "Confirmed",
        "created_at": "2025-09-29T09:10:00Z"
    },
    {
        "date": "2025-10-06T19:30:00Z",
        "shift": "Evening",
        "status": "Completed",
        "created_at": "2025-09-28T18:22:00Z"
    },
    {
        "date": "2025-10-07T08:00:00Z",
        "shift": "Morning",
        "status": "Cancelled",
        "created_at": "2025-09-27T07:30:00Z"
    },
    {
        "date": "2025-10-08T14:00:00Z",
        "shift": "Evening",
        "status": "Pending",
        "created_at": "2025-09-29T10:50:00Z"
    },
    {
        "date": "2025-10-09T20:00:00Z",
        "shift": "Evening",
        "status": "Confirmed",
        "created_at": "2025-09-29T12:15:00Z"
    }
]





module.exports = { schedule: sampleShedules , appointment: sampleAppointments};
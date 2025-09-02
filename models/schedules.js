const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    
    day_of_week: {
        type: String,
        enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        required: true,
    },
    start_time: { type: String, required: true },
    end_time: { type: String, required: true },
    is_active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Schedule", scheduleSchema);

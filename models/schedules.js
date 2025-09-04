const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    date: { 
        type: Date, 
        required: true 
    }, 
    start_time: { 
        type: String, 
        required: true 
    },
    end_time: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model("Schedule", scheduleSchema);

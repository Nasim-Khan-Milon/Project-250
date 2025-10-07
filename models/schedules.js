const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    date: { 
        type: Date, 
        required: true 
    }, 
    shift: { 
        type: String, 
        required: true 
    },
    
});

module.exports = mongoose.model("Schedule", scheduleSchema);

const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    phone: { type: String },
    specialization: { 
        type: String, 
        required: true 
    },
    bio: { type: String },
    chamber: { type: String },
    created_at: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model("Doctor", doctorSchema);

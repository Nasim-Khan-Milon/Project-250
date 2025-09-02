const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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
    dob: { type: Date },
    gender: { 
        type: String, 
        enum: ["Male", "Female", "Other"] 
    },
    address: { type: String },
    blood_group: { type: String },
    medical_history: { type: String },
    created_at: { 
        type: Date, 
        default: Date.now 
    },
});

module.exports = mongoose.model("Patient", patientSchema);

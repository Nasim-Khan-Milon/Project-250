const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  appointment_date: { type: Date, required: true },
  appointment_time: { type: String, required: true },
  reason: { type: String },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
    default: "Pending",
  },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", appointmentSchema);

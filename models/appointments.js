const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  
  date: { type: Date, required: true },
  shift: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
    default: "Pending",
  },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", appointmentSchema);

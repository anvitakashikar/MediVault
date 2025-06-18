import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// POST /api/appointments
router.post("/", async (req, res) => {
  const { doctorId, patientName, age, date, reason } = req.body;

  if (!doctorId || !patientName || !age || !date || !reason) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newAppointment = new Appointment({ doctorId, patientName, age, date, reason });
    const saved = await newAppointment.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error saving appointment:", err);
    res.status(500).json({ message: "Failed to create appointment." });
  }
});

export default router;

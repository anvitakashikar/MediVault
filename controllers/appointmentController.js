import Appointment from '../models/appointmentModel.js';

export const createAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json({ message: "Appointment created successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to create appointment.", error });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch appointments.", error });
  }
};

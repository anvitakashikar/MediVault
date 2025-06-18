import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  experience: { type: Number, required: true }, // in years
  contact: { type: String },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

export default Doctor;

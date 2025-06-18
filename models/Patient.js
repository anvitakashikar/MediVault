import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  contact: String,
  email: String,
  address: String,
  medicalHistory: [String], // Optional: list of past conditions, surgeries, etc.
}, {
  timestamps: true,
});

export default mongoose.model('Patient', patientSchema);

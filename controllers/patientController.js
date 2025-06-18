import Patient from '../models/Patient.js';

// ✅ GET all patients
export const getPatients = async (req, res) => {
  console.log('🔍 getPatients controller called');
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    console.error('❌ Error fetching patients:', err);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
};

// ✅ POST a new patient
export const addPatient = async (req, res) => {
  console.log('📥 addPatient controller called with:', req.body);
  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (err) {
    console.error('❌ Error adding patient:', err);
    res.status(500).json({ error: 'Failed to add patient' });
  }
};

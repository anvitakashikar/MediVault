import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import doctorRoutes from './routes/doctorRoutes.js';
import patientRoutes from './routes/patientRoutes.js'; 
import contactRoutes from './routes/contactRoutes.js';
import appointmentsRoute from "./routes/appointments.js";
import appointmentRoutes from './routes/appointmentRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Logging + Routes
app.use('/api/doctors', (req, res, next) => {
  console.log('📡 /api/doctors route hit');
  next();
}, doctorRoutes);

app.use('/api/patients', (req, res, next) => {
  console.log('📡 /api/patients route hit');
  next();
}, patientRoutes);

app.use('/api/contact', contactRoutes);

app.use("/api/appointments", appointmentRoutes);

app.use("/api/appointments", appointmentsRoute);
mongoose.connect("mongodb://localhost:27017/medivault", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB error:", err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.log('❌ DB connection failed:', err));

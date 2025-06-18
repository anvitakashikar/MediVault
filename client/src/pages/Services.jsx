import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Syringe,
  HeartPulse,
  Microscope,
  XCircle,
  Hospital,
} from "lucide-react";

const services = [
  {
    title: "General Consultation",
    icon: <Stethoscope className="h-10 w-10 text-blue-600" />,
    description: "Talk to our general physicians for your health concerns.",
  },
  {
    title: "Cardiology",
    icon: <HeartPulse className="h-10 w-10 text-red-500" />,
    description: "Advanced heart care by experienced cardiologists.",
  },
  {
    title: "Radiology",
    icon: <XCircle className="h-10 w-10 text-purple-500" />,
    description: "Modern scanning, X-ray, and diagnostic facilities.",
  },
  {
    title: "Pathology",
    icon: <Microscope className="h-10 w-10 text-green-500" />,
    description: "Accurate lab tests and reports from expert pathologists.",
  },
  {
    title: "Immunization",
    icon: <Syringe className="h-10 w-10 text-yellow-500" />,
    description: "Safe and timely vaccination for all age groups.",
  },
  {
    title: "Emergency Care",
    icon: <Hospital className="h-10 w-10 text-orange-500" />,
    description: "24x7 emergency care with rapid response teams.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-10 text-gray-800"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

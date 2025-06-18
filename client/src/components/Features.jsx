import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  CalendarCheck,
  Ambulance,
} from "lucide-react";

const features = [
  {
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
    title: "Expert Consultation",
    description: "Get diagnosis from certified professionals.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-rose-600" />,
    title: "Cardiac Monitoring",
    description: "Round-the-clock heart health support.",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-green-600" />,
    title: "Easy Appointments",
    description: "Book appointments online with one click.",
  },
  {
    icon: <Ambulance className="w-8 h-8 text-red-600" />,
    title: "Emergency Services",
    description: "24/7 emergency response and care.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10 text-gray-800"
        >
          Our Core Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

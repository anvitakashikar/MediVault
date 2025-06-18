import React from "react";
import { motion } from "framer-motion";

const doctors = [
  {
    name: "Dr. Aanya Kapoor",
    specialty: "Cardiologist",
    image: "/doctors/doc2.png",
  },
  {
    name: "Dr. Ishan Mehta",
    specialty: "Pediatrician",
    image: "/doctors/doc1.png",
  },
  {
    name: "Dr. Meera Rathi",
    specialty: "Neurologist",
    image: "/doctors/doc3.png",
  },
  {
    name: "Dr. Kunal Joshi",
    specialty: "General Physician",
    image: "/doctors/doc4.png",
  },
];

const Doctors = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10 text-gray-800"
        >
          Meet Our Specialists
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700">
                  {doc.name}
                </h3>
                <p className="text-sm text-blue-600">{doc.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;

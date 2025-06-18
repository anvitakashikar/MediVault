import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarya Sharma",
    feedback:
      "The doctors were really helpful and the experience was smooth and comforting. Highly recommended!",
    location: "Pune, India",
  },
  {
    name: "Rohan Mehta",
    feedback:
      "I was amazed by the quick diagnosis and how efficiently everything was handled. Truly professional.",
    location: "Mumbai, India",
  },
  {
    name: "Sneha Patel",
    feedback:
      "From booking appointments to getting treated, the whole process was seamless. Loved the support.",
    location: "Bangalore, India",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          What Our Patients Say
        </motion.h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <p className="text-gray-700 italic mb-4">"{testi.feedback}"</p>
              <h4 className="text-lg font-semibold text-blue-700">{testi.name}</h4>
              <p className="text-sm text-gray-500">{testi.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

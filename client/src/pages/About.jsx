import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-blue-100 py-20 px-6">
        <motion.h1
          className="text-5xl font-extrabold text-center text-blue-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About MediVault
        </motion.h1>
        <motion.p
          className="text-center text-gray-700 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We're on a mission to transform healthcare with powerful, secure, and user-friendly tools.
        </motion.p>
      </section>

      {/* Our Mission, Story, Why Us */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-blue-700 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm">
              To simplify healthcare access by providing a digital bridge between hospitals and patients.
            </p>
          </motion.div>

          <motion.div
            className="bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-green-700 mb-2">Our Story</h3>
            <p className="text-gray-600 text-sm">
              Started by a passionate team of engineers and doctors, MediVault is built on empathy and innovation.
            </p>
          </motion.div>

          <motion.div
            className="bg-purple-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-purple-700 mb-2">Why Choose Us</h3>
            <p className="text-gray-600 text-sm">
              Our platform is built for speed, trust, and clarity — giving patients and providers peace of mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-50 py-14 px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            A world where healthcare is seamless, efficient, and always within reach —
            powered by technology that puts people first.
          </p>
        </motion.div>
      </section>

      {/* Technology Stack */}
      <section className="py-14 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Hospital Technology We Use</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
          {[
            "Electronic Health Records (EHR)",
            "Telemedicine Integration",
            "AI-based Symptom Checker",
            "Secure Patient Portals",
            "Real-Time Appointment Scheduling",
            "Data Encryption & HIPAA Compliance",
            "Inventory & Pharmacy Management",
            "Cloud-Based Record Storage",
          ].map((tech, i) => (
            <motion.div
              key={tech}
              className="bg-white border p-4 rounded-xl shadow hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </section>


      {/* Patient-Centric Philosophy */}
      <section className="bg-blue-50 py-16 px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-6">Built Around You</h2>
          <p className="text-gray-700 text-lg text-center">
            Every feature we design keeps the user — patients and staff — at the center.
            From appointment scheduling to record keeping, MediVault is built to save you time and ensure a smooth experience.
          </p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-16 text-center bg-white">
        <motion.h3
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Join MediVault today
        </motion.h3>
        <p className="text-gray-600 mb-6">
          Experience how healthcare should feel — intuitive, fast, and human.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition">
          Book an Appointment
        </button>
      </section>
    </div>
  );
};

export default About;

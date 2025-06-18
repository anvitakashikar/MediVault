import React from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

const AppointmentCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 mt-16 rounded-2xl mx-4 lg:mx-32 shadow-xl">
      <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Ready to Book Your Appointment?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg max-w-2xl"
        >
          Get the care you deserve from top medical professionals. Booking an appointment is just a click away.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Link to="/appointments">
            <button className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition duration-300">
              <CalendarDays className="w-5 h-5" />
              Book Now
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentCTA;

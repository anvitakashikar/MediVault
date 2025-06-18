import React from 'react';
import { motion } from 'framer-motion';
import heroDoctor from '../assets/hero-doctor.png'; 

const Hero = () => {
  return (
    <section className="py-10 px-4 md:px-20 bg-white text-center">
      {/* Top Image - Elongated Horizontally */}
      <motion.img
        src={heroDoctor}
        alt="Doctor"
        className="mx-auto w-full max-w-5xl h-auto object-cover mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      {/* Heading and Text */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Welcome to <span className="text-blue-600">MediVault</span>
      </motion.h1>

      <motion.p
        className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Your trusted platform for managing appointments and patient records.
      </motion.p>
    </section>
  );
};

export default Hero;

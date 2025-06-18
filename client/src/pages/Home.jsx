import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Doctors from "../components/Doctors";
import AppointmentCTA from "../components/AppointmentCTA";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Features or Services */}
      <Features />

      {/* Doctors Section */}
      <Doctors />

      {/* Appointment CTA */}
      <AppointmentCTA />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact or Final CTA */}
      <Contact />
    </div>
  );
};

export default Home;

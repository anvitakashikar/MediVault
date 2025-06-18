import React from "react";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10 mt-20"> {/* Added mt-20 */}
      <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
      <p className="text-center text-gray-700 mb-8">
        We'd love to hear from you! Please fill out the form below or reach us via email or phone.
      </p>
      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
      <div className="mt-8 text-center text-gray-600">
        <p>Email: contact@medivault.com</p>
        <p>Phone: +91 123 456 7890</p>
      </div>
    </section>
  );
};

export default Contact;

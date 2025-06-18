import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-primary">
          MediVault
        </Link>

        <div className="hidden md:flex space-x-6 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary border-b-2 border-primary" : "text-gray-600 hover:text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink to="/about" className="text-gray-600 hover:text-primary">
            About
          </NavLink>
          <NavLink to="/services" className="text-gray-600 hover:text-primary">
            Services
          </NavLink>
          <NavLink to="/doctors" className="text-gray-600 hover:text-primary">
            Doctors
          </NavLink>
          <NavLink to="/contact" className="text-gray-600 hover:text-primary">
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-white px-4 pt-2 pb-4 shadow-md"
        >
          <NavLink to="/" className="block py-2 text-gray-600 hover:text-primary">
            Home
          </NavLink>
          <NavLink to="/about" className="block py-2 text-gray-600 hover:text-primary">
            About
          </NavLink>
          <NavLink to="/services" className="block py-2 text-gray-600 hover:text-primary">
            Services
          </NavLink>
          <NavLink to="/doctors" className="block py-2 text-gray-600 hover:text-primary">
            Doctors
          </NavLink>
          <NavLink to="/contact" className="block py-2 text-gray-600 hover:text-primary">
            Contact
          </NavLink>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookOpen, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // State to manage whether the mobile menu is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the mobile menu
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-20 px-6">
        
        {/* Logo */}
        <Link to="/" className="flex items-center text-blue-600 font-bold text-2xl" onClick={closeMobileMenu}>
          <FaBookOpen className="mr-3" />
          <span>IELTS Institute</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          <li><a href="#features" className="hover:text-blue-600 transition-colors duration-300">Features</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600 transition-colors duration-300">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a></li>
          <li>
            <a href="#get-started" className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-all duration-300">
              Get Started
            </a>
          </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Open Menu">
            {isOpen ? <FaTimes size={26} className="text-gray-700" /> : <FaBars size={26} className="text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center">
          <li>
            <a href="#features" className="block w-screen text-center py-4 text-lg hover:bg-gray-100" onClick={closeMobileMenu}>
              Features
            </a>
          </li>
          <li>
            <a href="#testimonials" className="block w-screen text-center py-4 text-lg hover:bg-gray-100" onClick={closeMobileMenu}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="block w-screen text-center py-4 text-lg hover:bg-gray-100" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
          <li className="py-6">
            <a href="#get-started" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-all duration-300" onClick={closeMobileMenu}>
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
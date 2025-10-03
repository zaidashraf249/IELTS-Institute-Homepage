// src/components/Footer.jsx

import React from 'react';
// Importing icons from react-icons
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-6 lg:px-8">
        {/* Main grid for footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: About Section */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-bold text-white mb-4">IELTS Institute</h3>
            <p className="text-gray-400">
              Your trusted partner in achieving your desired IELTS band score. Expert guidance, proven results.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors duration-300">Courses</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors duration-300">Testimonials</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <MdLocationOn className="text-blue-400 mt-1 mr-3 flex-shrink-0" size={20} />
                <span>123 Learning Lane, Nagpur, Maharashtra, 440010</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                <a href="mailto:info@ieltsinstitute.com" className="hover:text-white transition-colors duration-300">
                  info@ieltsinstitute.com
                </a>
              </li>
              <li className="flex items-center">
                <MdPhone className="text-blue-400 mr-3 flex-shrink-0" size={20} />
                <a href="tel:+91-9876543210" className="hover:text-white transition-colors duration-300">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="mb-6 lg:mb-0">
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-300"><FaFacebook size={24} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300"><FaTwitter size={24} /></a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300"><FaInstagram size={24} /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} IELTS Institute. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
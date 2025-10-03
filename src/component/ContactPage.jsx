// src/components/ContactPage.jsx

import React, { useState } from 'react';
// Changed to react-icons/md for Material Design icons
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { toast } from 'react-toastify';

const toastOptions = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleClick = () => {
      toast.success(
        <div className="flex items-center">
          {/* <FaCheckCircle className="text-green-500 mr-2" /> */}
          Thank you for your message! We will get back to you soon.
        </div>,
        toastOptions
      );
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We'd love to hear from you! Please fill out the form below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-6">
               <div className="flex items-start">
                 <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg p-3">
                   {/* Updated Icon */}
                   <MdEmail size={24} />
                 </div>
                 <div className="ml-4">
                   <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                   <p className="text-gray-600">contact@example.com</p>
                 </div>
               </div>
               <div className="flex items-start">
                 <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg p-3">
                   {/* Updated Icon */}
                   <MdPhone size={24} />
                 </div>
                 <div className="ml-4">
                   <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                   <p className="text-gray-600">+91 12345 67890</p>
                 </div>
               </div>
               <div className="flex items-start">
                 <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg p-3">
                   {/* Updated Icon */}
                   <MdLocationOn size={24} />
                 </div>
                 <div className="ml-4">
                   <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                   <p className="text-gray-600">123 Tech Park, Nagpur, Maharashtra, India</p>
                 </div>
               </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
import { FaRocket, FaCheckCircle } from "react-icons/fa"; // Importing icons
import heroImg from "../assets/hero.jpg"; // Your hero image
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles
import { motion } from "framer-motion"; // Import motion for animations

// Toastify configuration (remains the same)
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

// --- Enhancement: Data-driven features for scalability and cleaner code ---
const features = [
  { text: "AI-Powered Band Prediction" },
  { text: "Unlimited Mock Tests" },
  { text: "Personalized Feedback from Experts" },
];

const Hero = () => {
  const handleClick = () => {
    toast.success(
      <div className="flex items-center gap-2">
        {/* <FaCheckCircle className="text-green-500" /> */}
        Thank you for your interest! We'll be in touch.
      </div>,
      toastOptions
    );
  };

  // --- Enhancement: Animation variants for Framer Motion ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, duration: 0.8 },
    },
  };

  return (
    // --- Enhancement: Added a subtle gradient background ---
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-12">
        
        {/* Left Side: Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-800 leading-tight"
            variants={itemVariants}
          >
            Achieve Your <span className="text-blue-600">Desired IELTS Band</span>
          </motion.h1>

          <motion.p 
            className="text-gray-600 mb-8 text-lg"
            variants={itemVariants}
          >
            Join our expert-led classes and unlock your full potential.
          </motion.p>
          
          {/* --- Enhancement: Feature list for better value proposition --- */}
          <motion.ul 
            className="space-y-3 mb-8 text-left inline-block"
            variants={itemVariants}
          >
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{feature.text}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants}>
            <button
              onClick={handleClick}
              // --- Enhancement: Improved styling and interactive effects ---
              className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300 mx-auto md:mx-0"
            >
              <FaRocket /> Get Started Now
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          className="flex-1 mt-10 md:mt-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img 
            src={heroImg} 
            alt="Students happily preparing for IELTS exam" 
            className="rounded-lg shadow-2xl w-full h-auto object-cover" 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
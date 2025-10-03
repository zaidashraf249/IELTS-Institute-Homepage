import { FaMicrophoneAlt, FaFileAlt, FaRobot } from "react-icons/fa";
import { motion } from "framer-motion";

const featuresData = [
  {
    icon: FaMicrophoneAlt,
    title: "Speaking Practice",
    desc: "Daily live speaking sessions to improve fluency and confidence.",
  },
  {
    icon: FaFileAlt,
    title: "Mock Tests",
    desc: "Regular mock exams based on real IELTS patterns.",
  },
  {
    icon: FaRobot,
    title: "AI Band Score",
    desc: "Instant AI-powered band score predictions for quick feedback.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We provide a complete toolkit designed to help you succeed and achieve your target band score with confidence.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuresData.map((feature) => {
            const Icon = feature.icon; // Assign the component to a variable with a capital letter
            return (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex justify-center items-center mb-5 w-16 h-16 bg-blue-100 rounded-full mx-auto">
                  <Icon size={30} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-base">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
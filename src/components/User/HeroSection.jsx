import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-blue-500 text-gray-50 rounded-2xl shadow-xl p-8 text-center"
    >
      <h1 className="text-3xl sm:text-5xl font-bold">Welcome to EduPrism 🎓</h1>
      <p className="mt-3 text-lg sm:text-xl">
        Learn. Grow. Shine. Your personalized coaching portal.
      </p>
    </motion.div>
  );
};

export default HeroSection;

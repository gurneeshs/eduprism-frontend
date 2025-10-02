import { motion } from "framer-motion";
import { BookOpen, Users, Award, Clock, Star, Shield } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: <BookOpen className="w-10 h-10 text-teal-300" />,
    title: "Personalized Learning",
    description: "Each student receives a tailored learning plan to address their unique needs and goals, ensuring effective and efficient progress.",
  },
  {
    id: 2,
    icon: <Users className="w-10 h-10 text-lightgreen-700" />,
    title: "Interactive Lessons",
    description: "Our tutors use engaging methods to make learning enjoyable and memorable, fostering a deep understanding of the subject matter.",
  },
  {
    id: 3,
    icon: <Award className="w-10 h-10 text-orange-500" />,
    title: "Expert Tutors",
    description: "Learn from experienced educators like Dr. Singh, who bring real-world insights and academic expertise to every lesson.",
  },
  {
    id: 4,
    icon: <Clock className="w-10 h-10 text-redorange-500" />,
    title: "Comphrehensive Support",
    description: "Learn from experienced educators like Dr. Singh, who bring real-world insights and academic expertise to every lesson.",
  },
  {
    id: 5,
    icon: <Star className="w-10 h-10 text-green-300" />,
    title: "Flexible Scheduling",
    description: "We offer flexible tutoring schedules to accommodate busy student lifestyles, making it easier to balance study and other commitments.",
  },
  {
    id: 6,
    icon: <Shield className="w-10 h-10 text-blue-300" />,
    title: "Proven Results",
    description: "Our students consistently achieve high scores and gain admission to top universities, reflecting the effectiveness of our tutoring approach.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-16 px-6 px-2">
      {/* Small Heading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-md md:text-xl text-blue-700 font-semibold text-center"
      >
        WHY CHOOSE EDUPRISM?
      </motion.p>

      {/* Large Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 text-center mt-2"
      >
        Our Unique Approach
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            // whileHover={{ y: -8, scale: 1.00, duration: 0.1 }}
            className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:-translate-y-2 hover:shadow-lg transition transform duration-300 cursor-pointer text-left"
          >
            <div className="mb-4">{card.icon}</div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-md">{card.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700"
      >
        Learn More
      </motion.button>
    </section>
  );
};

export default WhyUs;

import { motion } from "framer-motion";
import { User } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    message: "This methodology completely transformed my career!",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    message: "The approach is practical, engaging, and highly effective.",
  },
  {
    name: "Alex Johnson",
    role: "UX Designer",
    message: "I loved the hands-on projects. They made learning fun!",
  },
  {
    name: "Sara Williams",
    role: "Data Analyst",
    message: "Amazing experience, highly recommend this to anyone!",
  },
  {
    name: "Michael Brown",
    role: "Entrepreneur",
    message: "The principles are easy to apply and very impactful.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonial" className="py-20 px-4 md:px-4 lg:px-8">
      {/* Headings */}
      <p className="text-md md:text-xl uppercase tracking-wider text-blue-700 font-semibold text-center">
        STUDENT ACHIEVEMENTS
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mt-2 text-center">
        What Our Clients Say
      </h2>

      {/* Slider */}
      <div className="overflow-hidden mt-12 relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* Duplicate the cards for seamless loop */}
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="min-w-[300px] bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">"{t.message}"</p>
              <h3 className="mt-4 font-semibold text-gray-800 dark:text-gray-200">{t.name}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{t.role}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:cursor-pointer"
                >
                    Start Your Success Story
                </motion.button>
    </section>
  );
}

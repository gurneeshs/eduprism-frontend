import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the duration of the program?",
    answer:
      "Our program typically lasts 12 weeks with flexible schedules to accommodate students’ needs.",
  },
  {
    question: "Are the classes online or offline?",
    answer:
      "We offer both online and offline classes depending on the batch and location.",
  },
  {
    question: "What is the student-teacher ratio?",
    answer:
      "We maintain a low student-teacher ratio of 10:1 to ensure personalized attention.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes! After successful completion, all students receive a certificate recognized by our institution.",
  },
  {
    question: "Can I switch batches?",
    answer:
      "Yes, batch switching is allowed depending on availability and prior notice.",
  },
  {
    question: "Is there any trial class available?",
    answer:
      "Absolutely! We offer a one-time free trial class to help you understand our teaching style.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-lg md:text-2xl text-blue-600 font-semibold uppercase">FAQ</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mt-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Find answers to the most common questions about our programs and
          services.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md cursor-pointer overflow-hidden border-l-4 border-blue-600 dark:border-blue-400"
          >
            <div
              className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 px-6 py-4 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors duration-300"
              onClick={() => toggleIndex(index)}
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-300 " />
              </motion.div>
            </div>

            {/* Smooth Dropdown */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ maxHeight: 0, opacity: 0 }}
                  animate={{ maxHeight: 500, opacity: 1 }}
                  exit={{ maxHeight: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="px-6 py-6 text-gray-600 dark:bg-gray-900 dark:text-gray-300 text-sm md:text-base overflow-hidden"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

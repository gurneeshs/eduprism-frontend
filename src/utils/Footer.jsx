// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { MapPin as FaMapMarkerAlt, Phone as FaPhoneAlt, Mail as FaEnvelope, Clock as FaClock} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="text-gray-200 pb-12">
      <div className="mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-400 pt-4 ">

        {/* Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">EduPRISM Learning</h2>
          <p className="text-gray-600 dark:text-gray-300 text-md">
            Illuminating academic potential through personalized, expert tutoring since 2015.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Programs", "Our Process", "Testimonials", "Contact Us"].map((link, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-500 dark:text-gray-300 dark:hover:text-gray-50 transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Contact Information</h3>
          <ul className="space-y-3 text-gray-400 dark:text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-blue-500 dark:text-gray-100" />
              NSW Office: 81-83 Campbell Street, Surry Hills, NSW 2010, Australia
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-blue-500 dark:text-gray-100" />
              VIC Office: Office 2481, Ground Floor, 470 St Kilda Rd, Melbourne, VIC 3004
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500 dark:text-gray-100" /> +61-424 373 202
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500 dark:text-gray-100" /> learn@eduprism.com.au
            </li>
            <li className="flex items-start gap-2">
              <FaClock className="mt-1 text-blue-500 dark:text-gray-100" />
              Mon-Fri: 3pm-8pm<br />Sat: 9am-5pm<br />Sun: Closed
            </li>
          </ul>
        </motion.div>

        {/* Made by */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col justify-between h-full"
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Made by</h3>
            <p className="text-gray-400 dark:text-gray-300">GurneeshSingh</p>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="col-span-1 md:col-span-4 text-center mt-8 text-gray-700 dark:text-gray-300 text-lg"
        >
          &copy; {new Date().getFullYear()} EduPRISM Learning. All rights reserved.
        </motion.div>

      </div>
    </footer>
  )
}

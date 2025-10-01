import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      {/* Headings */}
      <p className="text-sm uppercase tracking-wider text-blue-600 font-semibold text-center">
        Get in Touch
      </p>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2 text-center">
        Contact Us
      </h2>
      <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
        Have questions? Fill out the form and we’ll get back to you. 
        Whether you’re a student, parent, or just curious — we’d love to hear from you.
      </p>

      {/* Two Columns */}
      <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-full"
        >
          <img
            src="/contact/contact.jpg"
            alt="Contact"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Right Column - Form */}
        
      </div>
    </section>
  );
}

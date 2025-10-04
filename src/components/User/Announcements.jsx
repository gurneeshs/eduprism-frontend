import { motion } from "framer-motion";

const Announcements = () => {
  const updates = [
    "Mid-term exams start from 10th Oct 📅",
    "Science fair registrations are open 🎉",
    "New mock test available for Physics 🔬",
  ];

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 rounded-2xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-4">📢 Announcements</h2>
      <ul className="space-y-2">
        {updates.map((update, i) => (
          <li
            key={i}
            className="p-3 rounded-lg bg-blue-100 border border-indigo-200"
          >
            {update}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Announcements;

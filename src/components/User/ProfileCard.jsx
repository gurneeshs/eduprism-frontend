import { motion } from "framer-motion";

const ProfileCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6"
    >
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="Student"
        className="w-28 h-28 rounded-full border-4 border-blue-700"
      />
      <div>
        <h2 className="text-2xl font-bold">Aarav Sharma</h2>
        <p className="text-gray-500">Grade 10 • Science Stream</p>
        <p className="mt-2 text-blue-700 font-semibold">Batch: 2025</p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;

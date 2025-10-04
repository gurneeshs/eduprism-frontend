import { motion } from "framer-motion";

const ProgressSection = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-blue-100 border border-indigo-200 rounded-2xl p-6 text-center"
    >
      <h2 className="text-2xl font-bold text-blue-700">📊 Your Progress</h2>
      <p className="mt-2 text-gray-600">
        Great work! You're on track to achieve your academic goals.
      </p>
      <div className="mt-4 flex justify-center gap-6">
        <div className="bg-lightgreen-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold">92%</h3>
          <p className="text-gray-500">Attendance</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold">80%</h3>
          <p className="text-gray-500">Assignments</p>
        </div>
        <div className="bg-orange-100 p-4 rounded-lg shadow">
          <h3 className="text-xl font-bold">88%</h3>
          <p className="text-gray-500">Tests</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressSection;

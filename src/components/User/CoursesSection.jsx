import { motion } from "framer-motion";

const CoursesSection = () => {
  const courses = [
    { id: 1, name: "Mathematics", progress: 75 },
    { id: 2, name: "Physics", progress: 60 },
    { id: 3, name: "Chemistry", progress: 85 },
  ];

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-50 rounded-2xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-4 ">📘 Enrolled Courses</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="p-4 border rounded-xl shadow hover:shadow-md bg-blue-50"
          >
            <h3 className="font-semibold">{course.name}</h3>
            <div className="mt-2 bg-gray-300 h-3 rounded-full">
              <div
                className="bg-lightgreen-500 h-3 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm mt-1 text-gray-600">{course.progress}% completed</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CoursesSection;

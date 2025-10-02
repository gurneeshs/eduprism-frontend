import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    label: "Years",
    value: 15,
    color: "bg-blue-100 text-blue-700 border-blue-500",
  },
  {
    label: "Students",
    value: 500,
    color: "bg-lightgreen-100 text-lightgreen-700 border-lightgreen-700",
  },
  {
    label: "Teaching Hours",
    value: 10000,
    color: "bg-yellow-100 text-yellow-700 border-yellow-700",
  },
];

export default function Impact() {
  return (
    <section className="py-16 px-4 text-center">
      {/* Small Heading */}
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-md md:text-xl font-semibold tracking-widest text-blue-700 uppercase"
      >
        Our Impact
      </motion.h4>

      {/* Large Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mt-2"
      >
        Expert Educators. Proven Impact. <br></br>Trusted by Hundreds of Families.
      </motion.h2>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8  mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`rounded-xl border-2 p-6 shadow-md ${stat.color}`}
          >
            <h3 className="text-4xl md:text-5xl font-extrabold">
              <CountUp end={stat.value} duration={2} separator="," enableScrollSpy />
              {(stat.label === "Years" || stat.label === "Teaching Hours") && "+"}
            </h3>
            <p className="mt-2 text-lg font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

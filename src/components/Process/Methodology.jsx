import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket, Target, Shield } from "lucide-react";

const principles = [
    {
        title: "Precision",
        desc: "Every lesson is carefully designed to keep things simple and focused. By breaking down difficult tasks into smaller, manageable steps, we help students stay on track and understand what they've learned for longer.",
        icon: <Lightbulb className="w-6 h-6 text-yellow-700" />,
        color: "from-yellow-100 to-yellow-300",
    },
    {
        title: "Rigour",
        desc: "Every lesson prepares students thoughtfully with constructed challenges and tasks that require deeper thinking and application of what they've learned, building resilience and confidence.",
        icon: <Users className="w-6 h-6 text-blue-700" />,
        color: "from-blue-100 to-blue-300",
    },
    {
        title: "Insight",
        desc: "We look for why a student makes an error, and how to fix this. This diagnostic approach allows us to pinpoint the underlying misconceptions and guide students toward true understanding.",
        icon: <Rocket className="w-6 h-6 text-green-700" />,
        color: "from-green-100 to-green-300",
    },
    {
        title: "Strategy",
        desc: "Students are guided to become active strategic thinkers. Students are encouraged to think about their own learning through clear strategies and goal-setting practices.",
        icon: <Target className="w-6 h-6 text-orange-700" />,
        color: "from-orange-100 to-orange-300",
    },
    {
        title: "Mastery",
        desc: "Every student can succeed with a structured learning approach, expert designed feedback, and the right support. This unique approach helps students apply what they've learned to unfamiliar problems.",
        icon: <Shield className="w-6 h-6 text-teal-700" />,
        color: "from-teal-100 to-teal-300",

    },
];

export default function Methodology() {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 text-center">
            {/* Headings */}
            <p className="text-md md:text-xl uppercase tracking-wider text-blue-700 font-semibold">
                THE PRISM METHODOLOGY
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mt-2">
                Built on Five Core Principles
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                Our proven PRISM approach transforms how students learn by focusing on precision, rigour, insight, strategy, and mastery. Each element works together to create lasting academic success and confidence.


            </p>

            {/* Single Image */}
            <div className="mt-12">
                <img
                    src="/methodology/learning.jpg"
                    alt="Methodology Illustration"
                    className="mx-auto rounded-xl shadow-lg object-cover"
                />
            </div>

            {/* Principles */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {principles.map((p, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        // whileHover={{ scale: 1.05, y: -8 }}
                        className={`bg-gradient-to-br ${p.color} rounded-2xl shadow-lg p-6 flex flex-col hover:-translate-y-2 transition transform duration-300 items-center text-center`}
                    >
                        <div className="w-full sm:flex sm:items-center sm:justify-center sm:space-x-4 mb-4">                       
                         <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md mb-4">
                            {p.icon}
                        </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800 text-left sm:text-center w-full">{p.title}</h3>
                        <p className="text-gray-600 text-lg text-left sm:text-center mt-2">{p.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Final Call-to-Action */}
            <div className="mt-28 bg-gradient-to-r bg-blue-100  rounded-2xl p-10 max-w-3xl mx-auto shadow-md">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Ready to Experience the PRISM Difference?
                </h3>
                <p className="text-gray-600 mt-2 text-lg">
                    Join thousands of students who have transformed their academic journey through our proven methodology and expert guidance.
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700"
                >
                    Start Your Learning Journey
                </motion.button>
            </div>
        </section>
    );
}

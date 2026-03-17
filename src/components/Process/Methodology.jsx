import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket, Target, Shield } from "lucide-react";

const principles = [
    {
        title: "Precision",
        desc: "Every lesson is carefully designed to keep things simple and focused. By breaking down difficult tasks into smaller, manageable steps, we help students stay on track and understand what they've learned for longer.",
        icon: <Lightbulb className="w-6 h-6 text-white" />,
        color: "from-blue-700 to-blue-500",
    },
    {
        title: "Rigour",
        desc: "Every lesson prepares students thoughtfully with constructed challenges and tasks that require deeper thinking and application of what they've learned, building resilience and confidence.",
        icon: <Users className="w-6 h-6 text-white" />,
        color: "from-green-500 to-green-300",
    },
    {
        title: "Insight",
        desc: "We look for why a student makes an error, and how to fix this. This diagnostic approach allows us to pinpoint the underlying misconceptions and guide students toward true understanding.",
        icon: <Rocket className="w-6 h-6 text-white" />,
        color: "from-teal-700 to-teal-500",
    },
    {
        title: "Strategy",
        desc: "Students are guided to become active strategic thinkers. Students are encouraged to think about their own learning through clear strategies and goal-setting practices.",
        icon: <Target className="w-6 h-6 text-white" />,
        color: "from-orange-700 to-orange-500",
    },
    {
        title: "Mastery",
        desc: "Every student can succeed with a structured learning approach, expert designed feedback, and the right support. This unique approach helps students apply what they've learned to unfamiliar problems.",
        icon: <Shield className="w-6 h-6 text-white" />,
        color: "from-lightgreen-700 to-lightgreen-500",

    },
];

export default function Methodology() {
    return (
        <section className="py-20 px-4 md:px-10 lg:px-20 text-center ">
            {/* Headings */}
            <p className="text-sm md:text-lg uppercase tracking-wider text-blue-700 font-semibold">
                THE PRISM METHODOLOGY
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mt-2">
                Built on Five Core Principles
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
                Our proven PRISM approach transforms how students learn by focusing on precision, rigour, insight, strategy, and mastery. Each element works together to create lasting academic success and confidence.


            </p>

            {/* Single Image */}
            <div className="mt-12">
                <img
                    src="/methodology/learning.avif"
                    alt="Methodology Illustration"
                    className="mx-auto rounded-xl shadow-lg object-cover"
                />
            </div>

            {/* Principles */}
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {principles.map((p, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-9 hover:-translate-y-2 transition transform duration-300"
                    >
                        {/* Header */}
                        <div className="flex items-start gap-4">
                            <div className={`bg-gradient-to-br ${p.color} p-5 rounded-xl flex items-center justify-center shadow-md`}>
                                {p.icon}
                            </div>

                            <div className="text-left">
                                <h3 className="text-2xl mb-2 font-semibold text-gray-800 dark:text-gray-200">
                                    {p.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                    {p.desc}
                                </p>
                            </div>
                        </div>

                        {/* Description */}

                    </motion.div>
                ))}
            </div>

            {/* Final Call-to-Action */}
            <div className="mt-28 bg-gradient-to-r bg-blue-50   rounded-2xl p-10 max-w-3xl mx-auto shadow-md">
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

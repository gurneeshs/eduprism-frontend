// src/components/About.jsx
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { BookOpen, Users, Award, Clock } from "lucide-react";

export default function About() {
    return (

        <section className="py-16">

            <div className="mx-auto px-4 pt-10 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left Side Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                        className="space-y-6 lg:text-left"
                    >
                        <h2 className="text-6xl  text-gray-800 dark:text-gray-100 w-100">
                            100% Online AI - Powered <span className="text-blue-600">EduPRISM</span> Learning
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-2xl leading-relaxed">
                            Experience state-of-the-art AI-powered tools that create personalized
                            learning pathways tailored to your unique needs with guaranteed results.
                        </p>

                        <div className="space-x-4">
                            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition">
                                Book a Free Consultation
                            </button>
                            <button className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-xl shadow hover:bg-gray-300 transition">
                                Discover Over Process
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Big Image */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <img
                                    src="/about/img1.jpg"
                                    alt="Big"
                                    className="rounded-2xl shadow-lg w-full object-cover h-72"
                                />
                            </div>

                            {/* Small Images */}
                            <img
                                src="/about/img2.jpg"
                                alt="Small 1"
                                className="rounded-2xl shadow-md w-full object-cover h-40"
                            />
                            <img
                                src="/about/img3.jpg"
                                alt="Small 2"
                                className="rounded-2xl shadow-md w-full object-cover h-40"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                            <div className="dark:bg-blue-100 bg-blue-200 rounded-xl p-6 text-center shadow hover:scale-105 transition">
                                <h3 className="text-3xl font-bold text-blue-600">
                                    <CountUp end={95} duration={2} suffix="%" enableScrollSpy />
                                </h3>
                                <p className="mt-2 text-gray-700">Grade Improvement</p>
                            </div>
                            <div className="bg-green-200 dark:bg-green-100 rounded-xl p-6 text-center shadow hover:scale-105 transition">
                                <h3 className="text-3xl font-bold text-green-600">
                                    <CountUp end={99} duration={2} suffix="%" enableScrollSpy />
                                </h3>
                                <p className="mt-2 text-gray-700">Satisfaction Rate</p>
                            </div>
                            <div className="bg-yellow-200 dark:bg-yellow-100 rounded-xl p-6 text-center shadow hover:scale-105 transition">
                                <h3 className="text-3xl font-bold text-yellow-600">
                                    <CountUp end={1200} duration={2} suffix=" hrs" enableScrollSpy />
                                </h3>
                                <p className="mt-2 text-gray-700">Tutoring Hours</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 px-4"
            >
                {/* Block 1 */}
                <div className="flex items-center gap-3 bg-blue-200 p-7 rounded-xl shadow hover:bg-blue-300 hover:-translate-y-2 hover:shadow-lg transition transform duration-300 cursor-pointer">
                    <BookOpen className="text-blue-600 w-8 h-8" />
                    <span className="text-gray-800 font-semibold">Learning</span>
                </div>

                {/* Block 2 */}
                <div className="flex items-center gap-3 bg-green-200 p-7 rounded-xl shadow hover:bg-green-300 hover:-translate-y-2 hover:shadow-lg transition transform duration-300 cursor-pointer">
                    <Users className="text-green-600 w-8 h-8" />
                    <span className="text-gray-800 font-semibold">Community</span>
                </div>

                {/* Block 3 */}
                <div className="flex items-center gap-3 bg-yellow-200 p-7 rounded-xl shadow hover:bg-yellow-300 hover:-translate-y-2 hover:shadow-lg transition transform duration-300 cursor-pointer">
                    <Award className="text-yellow-600 w-8 h-8" />
                    <span className="text-gray-800 font-semibold">Excellence</span>
                </div>

                {/* Block 4 */}
                <div className="flex items-center gap-3 bg-purple-200 p-7 rounded-xl shadow hover:bg-purple-300 hover:-translate-y-2 hover:shadow-lg transition transform duration-300 cursor-pointer">
                    <Clock className="text-purple-600 w-8 h-8" />
                    <span className="text-gray-800 font-semibold">Time</span>
                </div>
            </motion.div>

        </section>
    );
}

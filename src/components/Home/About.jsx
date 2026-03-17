// src/components/About.jsx
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { GraduationCap, ShieldCheck, Star, TrendingUp } from "lucide-react";

export default function About() {
    return (

        <section className="py-16 ">

            <div className="mx-auto px-20 pt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left Side Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-center lg:text-left"
                    >
                        <h2 className="text-5xl text-gray-800 dark:text-gray-100 w-full lg:w-100">
                            Personalised  Online <span className="text-blue-500">Tutoring</span> for Every Learner, Every Level in <span className="text-blue-500">Science, Math and English</span>
                            {/* 100% Online AI - Powered <span className="text-blue-500">EduPRISM</span> Learning */}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
                            Selective Entry | Scholarship Exams | Years 5–12 |VCE. HSC, QCE, WACE, SACE

                        </p>

                        <div className="space-x-4 flex">
                            <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition">
                                Book a Free Consultation
                            </button>
                            <button className="px-6 py-3 bg-lightgreen-500 text-gray-50 font-medium rounded-xl shadow hover:bg-lightgreen-700 transition">
                                Discover Over Process
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Big Image */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <img
                                    src="/about/img1.avif"
                                    alt="Big"
                                    className="rounded-2xl shadow-lg w-full object-cover h-72"
                                />
                            </div>

                            {/* Small Images */}
                            <img
                                src="/about/img2.avif"
                                alt="Small 1"
                                className="rounded-2xl shadow-md w-full object-cover h-40"
                            />
                            <img
                                src="/about/img3.avif"
                                alt="Small 2"
                                className="rounded-2xl shadow-md w-full object-cover h-40"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                            <div className="bg-teal-100 dark:bg-teal-100 rounded-xl p-6 text-center shadow hover:scale-105 transition">
                                <h3 className="text-2xl font-bold text-teal-500">
                                    <CountUp end={10000} duration={2} suffix="+" enableScrollSpy />
                                </h3>
                                <p className="mt-2 text-gray-700">Tutoring Hours</p>
                            </div>

                            <div className="bg-green-100 dark:bg-green-100 rounded-xl p-6 text-center shadow hover:scale-105 transition">
                                <h3 className="text-2xl font-bold text-green-500">
                                    <CountUp end={500} duration={2} suffix="+" enableScrollSpy />
                                </h3>
                                <p className="mt-2 text-gray-700">Students</p>
                            </div>
                            <div className="dark:bg-blue-100 bg-blue-100 rounded-xl py-6 text-center shadow hover:scale-105 transition">
                                <h3 className="text-2xl font-bold text-blue-500">
                                    <CountUp end={5} duration={2} suffix=" ★" enableScrollSpy />
                                </h3>
                                <p className="mt-2 text-gray-700">Genuine Google Reviews</p>
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
                className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 px-20"
            >
                <div className="flex items-center gap-3 bg-white dark:bg-gray-900 p-7 rounded-xl shadow hover:-translate-y-2 hover:shadow-lg transition transform duration-300 cursor-pointer">
                    <GraduationCap className="text-blue-500 w-8 h-8" />
                    <span className="text-gray-800 dark:text-gray-300 font-semibold">Certified Tutors</span>
                </div>

                {/* Block 2 */}
                <div className="flex items-center gap-3 bg-white dark:bg-gray-900 p-7 rounded-xl shadow hover:-translate-y-2 hover:shadow-lg transition transform duration-300 cursor-pointer">
                    <ShieldCheck className="text-green-500 w-8 h-8" />
                    <span className="text-gray-800 dark:text-gray-300 font-semibold">Safe Learning</span>
                </div>

                {/* Block 3 */}
                <div className="flex items-center gap-3 bg-white dark:bg-gray-900 p-7 rounded-xl shadow hover:-translate-y-2 hover:shadow-lg transition transform duration-300 cursor-pointer">
                    <Star className="text-yellow-600 w-8 h-8" />
                    <span className="text-gray-800 dark:text-gray-300 font-semibold">Expert Educators</span>
                </div>

                {/* Block 4 */}
                <div className="flex items-center gap-3 bg-white dark:bg-gray-900 p-7 rounded-xl shadow hover:-translate-y-2 hover:shadow-lg transition transform duration-300 cursor-pointer">
                    <TrendingUp className="text-orange-500 w-8 h-8" />
                    <span className="text-gray-800 dark:text-gray-300 font-semibold">Results Guaranteed</span>
                </div>
            </motion.div>

        </section>
    );
}

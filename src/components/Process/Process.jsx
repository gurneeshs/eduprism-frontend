import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        title: "Express your interest",
        desc: "Begin by expressing your interest through our simple online form, sharing your academic goals and areas of focus.",
    },
    {
        title: "Book a Free Consultation",
        desc: "Engage in a personalised phone consultation with our mentors to tailor a learning plan that suits your needs.",
    },
    {
        title: "Student Assessment & Profile",
        desc: "Participate in a free diagnostic assessment to identify strengths and areas for improvement, forming the basis of your customized study plan.",
    },
    {
        title: "Customised Program Designed",
        desc: "Based on the assessment results, we design a personalised tutoring program tailored to your child's strengths, needs, and academic goals.",
    },
    {
        title: "Live Tutoring Begins",
        desc: "The student starts engaging in live, interactive sessions with expert tutors—following the customised plan and receiving continuous support to ensure progress and confidence.",
    },
];

export default function Process() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0%", "end 100%"],
    });

    return (
        <section ref={ref} id="process" className="py-16 relative">
            {/* Main Heading */}
            <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-16">
                Your 5-Steps Pathway to Success
            </h2>

            <div className="relative mx-auto max-w-4xl">
                {/* Vertical base line */}
                <div className="absolute left-1/2 top-0 h-full w-3 bg-gray-300 -translate-x-1/2 rounded-full" />

                {/* Scroll progress line */}
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-1/2 top-0 h-full w-3 bg-blue-500 -translate-x-1/2 origin-top rounded-full"
                />

                {/* Steps */}
                <div className="space-y-24 relative">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative flex"
                        >
                            {/* Step content left/right */}
                            <div
                                className={`w-1/2 px-6 ${index % 2 === 0 ? "text-right pr-12" : "ml-auto text-left pl-12"
                                    }`}
                            >
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-300 ">
                                    {step.title}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400 text-lg">{step.desc}</p>
                            </div>

                            {/* Number dot fixed at center line */}
                            <div className="absolute text-xl left-1/2 -translate-x-1/2 bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center font-bold shadow-md">
                                {index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Call-to-Action Button */}
            <div className="mt-20 flex justify-center">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:cursor-pointer focus:outline-none"
                >
                    Join Us Today
                </motion.button>
            </div>

        </section>
    );
}

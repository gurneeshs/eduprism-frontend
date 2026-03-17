import { motion } from "framer-motion";
import { BookOpen, Users, Award, Clock, Star, Shield } from "lucide-react";
import FlipCard from "./FlipCard";
import { useState } from "react";



const Objection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const concerns = [
        {
            title: "Digital Distraction",
            concern: [
                "Students switch between tabs, games, and social media during study time.",
                "Parents cannot constantly supervise screen use.",
                "Online school during COVID created a belief that screen ≠ learning."
            ],
            solution: [
                "On standard video platforms, students can easily open another tab while the tutor speaks to a silent screen. Learning may look active, but attention is often gone.",
                "Eduprism sessions are designed to prevent passive screen time.",
                "Students stay engaged through guided problem-solving and structured interaction.",
                "Live monitoring ensures accountability.",
                "Every minute online becomes real learning."
            ]
        },

        {
            title: "Passive Learning",
            concern: [
                "Parents fear their child may nod and say 'yes, I understand' without truly processing the concept.",
                "They worry the tutor may just be talking to fill the hour.",
                "They fear online tutors cannot see the student's paper, frustration, or wandering attention."
            ],
            solution: [
                "Eduprism is designed to eliminate these uncertainties.",
                "Students must solve, explain, and demonstrate thinking continuously.",
                "Tutors actively monitor understanding in real time.",
                "Tutors have a dashboard view of every student’s work simultaneously.",
                "Students write in physical notebooks and show their reasoning live.",
                "Homework and post-class assessments reinforce accountability.",
                "Parents don’t have to hope learning is happening — they can know it is."
            ]
        },

        {
            title: "Online Fatigue",
            concern: [
                "Parents worry online tutoring is less effective than in-person learning.",
                "They are concerned about the physical and mental toll of pointless screen time.",
                "They fear screen time that doesn’t lead to meaningful breakthroughs."
            ],
            solution: [
                "We don’t believe in more screen time — we believe in better screen time.",
                "Traditional online tutoring is slow and draining.",
                "We eliminate distractions and redundant content.",
                "Sessions are high-intensity and mentally engaging.",
                "Short, focused learning replaces long, monotonous lessons."
            ]
        },

        {
            title: "Social Isolation",
            concern: [
                "Parents fear their child may feel isolated in an online class.",
                "They believe students need classroom social pressure to stay motivated.",
                "Online learning can feel lonely and clinical."
            ],
            solution: [
                "Eduprism sessions are highly interactive and collaborative.",
                "Tutors teach concepts and then facilitate live problem-solving.",
                "Students actively participate instead of passively listening.",
                "On the whiteboard, students see each other’s cursors moving in real time.",
                "This creates a powerful 'Digital Hive' classroom energy.",
                "Students experience a collaborative studio environment."
            ]
        },

        {
            title: "Technical Glitches",
            concern: [
                "Parents worry audio cut-outs may disrupt learning.",
                "Screen freezes or webcam issues can break flow.",
                "Technical problems may cause missed understanding."
            ],
            solution: [
                "Work auto-saves and syncs instantly even if connection flickers.",
                "Students can still see and annotate on the live whiteboard without webcam.",
                "Tutors guide students through real-time private chat if needed.",
                "Students can show work via notebook, whiteboard, or uploaded images.",
                "Full class recordings are available for revision and catch-up."
            ]
        },

        {
            title: "Missing Tactile Experience",
            concern: [
                "Parents believe Math and Science require pen and paper.",
                "Children learn by doing, not by clicking.",
                "You cannot master Mathematics, Chemistry, or Physics only on a keyboard."
            ],
            solution: [
                "Students can use tablet and stylus to write directly on the whiteboard.",
                "They can also use traditional pen and paper.",
                "Students show their work via webcam or upload images directly.",
                "Handwritten problem-solving is fully integrated into sessions.",
                "Eduprism blends digital learning with traditional tactile experience."
            ]
        }
    ];
    return (
        <section className="py-16 px-20 ">
            {/* Small Heading */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm md:text-lg text-blue-700 font-semibold text-center"
            >
                WHY CHOOSE EDUPRISM?
            </motion.p>

            {/* Large Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center mt-2"
            >
                Parent Concerns
            </motion.h2>
            {/* Small Text */}
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-center">
                Parents Have Real Concerns About Online Learning.
                We Built Eduprism To Solve Them.
            </p>

            {/* Cards */}


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                {concerns.map((item, index) => (
                    <FlipCard
                        key={index}
                        index={index}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        {...item}
                    />
                ))}
            </div>

            {/* Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700"
            >
                Learn More
            </motion.button>
        </section>
    );
};

export default Objection;

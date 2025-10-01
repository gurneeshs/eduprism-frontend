

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const colors = [
    "text-red-600",
    "text-blue-600",
    "text-green-600",
    "text-purple-600",
    "text-pink-500",
    "text-yellow-600"
]

const colorsBg = [
    "from-red-400 to-red-600",
    "from-blue-400 to-blue-600",
    "from-green-400 to-green-600",
    "from-purple-400 to-purple-600",
    "from-pink-400 to-pink-600",
    "from-yellow-400 to-yellow-600"
]

const tutors = [
    { name: "Dr. Indramohan Singh", position: "Head Tutor & Science Mentor", desc: "With over a decade dedicated to fostering academic success, Dr. Singh brings expertise in Biology, Chemistry and Mathematics based through years of university teaching and high school tutoring. \n Dr. Singh's dedication extends beyond instruction towards mentorship and his Foundation for Young Minds journal, where he guides young researchers in scientific writing and peer review.\n Furthermore, his volunteer work with the Rotary Foundation empowers students from diverse backgrounds with the guidance and resilience for informed life choices. This reflects a profound commitment to both academic achievement and personal development." },
    { name: "Anika Thapliyal", position: "Chemistry and Biology Specialist", desc: "Anika demonstrates a deep passion for science education by employing evidence-based and interactive teaching methods that cater to various learning styles.\n Beyond her classroom responsibilities, Anika serves as a dedicated mentor, coach, and tutor, offering valuable feedback and study strategies to facilitate effective exam preparation and academic progress. \n Her extensive background in the science industry allows her to combine classroom expertise with strategic, real-world applications, inspiring students to confidently navigate challenges on their path toward promising futures in the field." },
    { name: "Mishel D'Sa", position: "English Tutor", desc: "Mishel D'Sa holds a Masters degree in English Literature with Research, which complements her extensive experience in content development and tutoring. She is an experienced curriculum designer and educator.\n In her teaching career, Mishel has collaborated with educators, animators, and designers to create engaging learning materials. As a tutor, Mishel focuses on student-centred curriculum design and open communication with students.\n She is particularly passionate about using her skills to foster creativity and innovation in English education. Mishel has taught over 3000 students in the past decade." },
    { name: "Parvinder Kaur", position: "Mathematics Specialist", desc: "As a tutor of Education, Parvinder uses her flexible background in academia and industry to create maths lessons that meet the individual needs of her students. Her goal is to spark a love for mathematics by adapting her teaching to different learning styles.\n In addition to her tutoring work, Parvinder is a Teaching Specialist and PhD candidate at the University of Melbourne, where she develops practical and engaging learning materials.\n Her experience as a Lecturer at Sunway University, where she designed courses and collaborated with educators and parents on personalised study plans, further strengthens her ability to support student success at EduPrism." },
    { name: "Praghya", position: "UCAT Exam Coach", desc: "Praghya is a final-year medical student at MAHSA University, Malaysia. She also holds both a Bachelor and Honours degree in Biomedical Sciences from Monash University, where she specialised in research within the Department of General Practice.\n She completed her VCE at a Selective High School in Mount Waverley, scoring 99.15, earning her 'Duke of Edinburgh' Bronze award. She achieved a remarkable 95th percentile in the UMAT (now UCAT) exam, along with an impressive 85th percentile score in the GAMSAT exam.As an exceptional tutor and mentor, Praghya provides personalised, effective lessons, offering valuable feedback and study tips to help students excel in exam preparation." },
    { name: "Mehak", position: "Middle School English and Maths Tutor", desc: "Mehak is a second-year Biomedicine student at Monash University with extensive experience in tutoring, marking, and content creation. She is passionate about helping students understand complex concepts and build important skills in English and Mathematics.\n Mehak is dedicated to applying engaging and effective learning methods in her tutoring, ensuring students gain both theoretical knowledge and practical skills for academic success.\n She is committed to continuous learning and applying her expertise to support students in achieving their academic goals." },
]

export default function Team() {
    const scrollRef = useRef(null)
    const { scrollXProgress } = useScroll({ container: scrollRef })
    const mask = useTransform(scrollXProgress, [0, 1], [
        "linear-gradient(to right, #000, #000 20%, transparent 80%, transparent)",
        "linear-gradient(to right, transparent, #000 20%, #000 80%, transparent)",
    ])

    const scrollByAmount = (direction) => {
        if (!scrollRef.current) return
        const container = scrollRef.current
        const scrollDistance = container.clientWidth * 1 // scroll 70% of visible width
        container.scrollBy({
            left: direction === "right" ? scrollDistance : -scrollDistance,
            behavior: "smooth",
        })
    }

    return (
        <section className="py-16 relative">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-md md:text-xl text-blue-600 font-semibold uppercase">Meet our team</p>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mt-2">
                    Our Expert Educators
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                    Meet our passionate team of educators who bring expertise, dedication, and innovation to every learning experience.
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto flex items-center">
                {/* Left Gradient */}
                <motion.div
                    style={{ maskImage: mask, WebkitMaskImage: mask }}
                    className="absolute left-0 top-0 h-full w-full pointer-events-none z-10"
                />

                {/* Left Arrow */}
                <button
                    onClick={() => scrollByAmount("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-gray-800 dark:bg-gray-200 rounded-full shadow hover:scale-110 transition"
                >
                    <ChevronLeft className="w-6 h-6 text-blue-200 dark:text-blue-700" />
                </button>

                {/* Cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-hidden px-4 mx-2 scroll-smooth scrollbar-hide"
                >
                    {tutors.map((tutor, i) => (
                        <motion.div
                            key={i}
                            className="min-w-full bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-md p-8 flex flex-col items-start gap-4 cursor-pointer hover:shadow-xl transition-all"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-start gap-4 w-full">
                                {/* Logo */}
                                <div className={`w-25 h-25 flex-shrink-0 rounded-full bg-gradient-to-r ${colorsBg[i]} flex items-center justify-center text-white font-bold text-2xl`}>
                                    {tutor.name.split(" ").map((n) => n[0]).join("")}
                                </div>

                                {/* Info */}
                                <div className="flex flex-col text-left">
                                    {/* Name */}
                                    <motion.h3
                                        className="text-3xl font-bold text-gray-800 dark:text-gray-200"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {tutor.name}
                                    </motion.h3>

                                    {/* Position */}
                                    <motion.p
                                        className={`${colors[i]} text-xl font-bold mt-1`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    >
                                        {tutor.position}
                                    </motion.p>

                                    {/* Description */}
                                    <motion.div
                                        className="text-gray-600 dark:text-gray-300 text-2xl mt-2"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.5 }}
                                        variants={{
                                            hidden: {},
                                            visible: { transition: { staggerChildren: 0.15 } }
                                        }}
                                    >
                                        {tutor.desc.split("\n").map((line, idx) => (
                                            <motion.span
                                                key={idx}
                                                className="block mb-4"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: false, amount: 0.5 }}
                                                transition={{ duration: 0.8 }}
                                            >
                                                {line}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scrollByAmount("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-gray-800 dark:bg-gray-200 rounded-full shadow hover:scale-110 transition"
                >
                    <ChevronRight className="w-6 h-6 text-blue-200 dark:text-blue-700" />
                </button>
            </div>
        </section>
    )
}

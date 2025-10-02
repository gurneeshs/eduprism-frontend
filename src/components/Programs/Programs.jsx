import { motion } from "framer-motion"
import { useState } from "react";
import {
    BookOpen,
    Code,
    Cpu,
    Rocket,
    ChevronDown
} from "lucide-react";

const cardsData = [
    {
        title: "Mathematics Mastery",
        icon: <Code className="w-6 h-6 text-white" />,
        color: "border-t-4 border-blue-500",
        description:
            "Our Mathematics Mastery program builds strong foundations, sharpens problem-solving, and prepares students to excel — whether aiming for selective school entry or high performance in senior school exams like VCE, HSC, QCE, SACE, or WACE.",
        modules: [
            { head: "Primary (Grades 5-6)", content: "Develop core skills and numerical fluency. We focus on building strong foundations in number sense, operations, measurement, and early algebra concepts." },
            { head: "Selective Entry Prep", content: "Targeted coaching for SEAL, HAST, Science Schools, and Selective Exams. Our specialized preparation includes advanced problem-solving techniques, pattern recognition, and mathematical reasoning." },
            { head: "Secondary (Years 7-10)", content: "Fill learning gaps and boost confidence across key topics. We cover algebra, geometry, statistics, probability, and trigonometry with clear explanations and plenty of practice." },
            { head: "Senior (Years 11-12)", content: "Expert support in all Australian streams of senior maths — from General to Specialist. We provide comprehensive preparation for calculus, statistics, mechanics, and discrete mathematics with exam-focused strategies." },

        ],
        approach: "Personalised tutoring, smart resources, and measurable progress in every session. We track improvement through regular assessments and provide detailed feedback to students and parents.",
    },
    {
        title: "Science Simplified",
        icon: <Cpu className="w-6 h-6 text-white" />,
        color: "border-t-4 border-green-500",
        description:
            "Science Simplified turns confusion into clarity with engaging, expert-led tutoring in Physics, Chemistry, and Biology. Whether your child is in primary school or preparing for senior exams, we make science understandable, relevant, and rewarding through hands-on experiments, visual models, and real-world applications.",
        modules: [
            { head: "Physics", content: "From mechanics to electromagnetism and modern physics. Our tutoring clarifies complex theories through intuitive explanations, practical experiments, and problem-solving practice with real exam questions." },
            { head: "Chemistry", content: "Master organic and inorganic chemistry, stoichiometry, and chemical reactions. We employ molecular models, digital simulations, and laboratory-style demonstrations to make abstract concepts tangible." },
            { head: "Biology", content: "Comprehensive coverage of cellular processes, genetics, evolution, and ecosystems. Our tutors connect theoretical knowledge with practical applications in medicine, environmental science, and biotechnology." },
            { head: "Science Specialist Schools", content: "Focused training for JMSS and EBSS entrance exams with specialized curriculum aligned with entrance requirements." },
        ],
        approach: "We integrate visual learning, practical experiments, and digital simulations to make complex scientific concepts accessible and engaging. Our tutors are specialized in their respective scientific fields and bring real-world expertise to every lesson.",
    },
    {
        title: "English Excellence",
        icon: <BookOpen className="w-6 h-6 text-white" />,
        color: "border-t-4 border-purple-500",
        description:
            "Our English Excellence program helps students master language, communication, and critical thinking. From primary literacy to senior essay writing, we tailor every lesson to strengthen skills and boost academic success. Our approach balances technical skill development with creative expression and analytical depth.",
        modules: [
            { head: "Literature Analysis", content: "Develop deep understanding of texts through character analysis, theme exploration, symbolism, and contextual interpretation. We use active reading strategies, guided discussions, and structured analytical frameworks to unlock meaning in classic and contemporary literature." },
            { head: "Essay Writing", content: "Master the art of persuasive, analytical, and creative writing with our step-by-step approach. We cover thesis development, evidence selection, paragraph structure, transitions, and rhetorical techniques for impactful writing." },
            { head: "Language Skills", content: "Enhance grammar, vocabulary, syntax, and style with targeted exercises and real-world applications. Our tutors provide personalized feedback to eliminate common errors and develop sophisticated expression." },
            { head: "Exam Preparation", content: "Specialized coaching for VCE English, English Language, and Literature with strategic techniques for text response, language analysis, and comparative essays." },
        ],
        approach: "We combine structured skill development with authentic practice using actual texts and assessment tasks from schools. Our English tutors are passionate about literature and communication, many with backgrounds in journalism, publishing, and creative writing.",
    },
    {
        title: "Selective Entry Specialists",
        icon: <Rocket className="w-6 h-6 text-white" />,
        color: "border-t-4 border-red-500",
        description:
            "Our comprehensive Selective Entry program provides specialized preparation for all major selective school entrance exams, scholarship tests, and accelerated learning programs. We combine subject expertise with test-specific strategies to maximize your child's performance and confidence on test day.",
        modules: [
            { head: "Verbal Reasoning", content: "Develop critical vocabulary, synonym/antonym relationships, analogies, and word problems skills. Our systematic approach builds pattern recognition abilities essential for these challenging questions." },
            { head: "Numerical Reasoning", content: "Master advanced mathematical thinking, number sequences, data interpretation, and abstract problem-solving. We teach powerful strategies for tackling unfamiliar question types under time pressure." },
            { head: "Abstract Reasoning", content: "Enhance pattern recognition, spatial awareness, and logical thinking with specialized exercises that develop the cognitive flexibility needed for these challenging test components." },
            { head: "Writing Skills", content: "Excel in creative, persuasive, and analytical writing tasks with frameworks that allow for both structure and originality. Our tutors provide detailed feedback to refine expression and develop a distinctive voice." },
        ],
        approach: "Strategic preparation, authentic practice tests, and proven success strategies. Our selective entry specialists have helped hundreds of students gain entry to prestigious schools and scholarship programs with comprehensive preparation and ongoing support.",
    },
];


const cardColors = [
    "border-t-4 border-blue-700",
    "border-t-4 border-lightgreen-700",
    "border-t-4 border-orange-300",
    "border-t-4 border-teal-500",
];
const cardTextColors = [
    "text-blue-700",
    "text-lightgreen-700",
    "text-orange-500",
    "text-teal-500",
];
const cardBgColors = [
    "bg-blue-700",
    "bg-lightgreen-700",
    "bg-orange-500",
    "bg-teal-500",
];

const cardApproackColors = [
    "bg-blue-100",
    "bg-lightgreen-100",
    "bg-orange-100",
    "bg-teal-100",
];


const Dropdown = ({ title, content, color }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-gray-200 dark:border-gray-700 p-2 rounded-lg ">
            <button
                onClick={() => setOpen(!open)}
                className={`flex justify-between items-center w-full text-left ${color} font-medium hover:cursor-pointer`}
            >
                {title}
                <ChevronDown
                    className={`hover:cursor-pointer h-5 w-5 transform transition-transform ${open ? "rotate-180" : ""
                        }`}
                />
            </button>
            {open && <p className="mt-2 text-md py-2 text-left text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 hover:cursor-pointer ">{content}</p>}
        </div>
    );
};
export default function Programs() {
    return (
        <section className="py-16 px-2 mx-auto">
            {/* Small Heading */}
            <p className="text-md md:text-xl text-blue-700 font-semibold  uppercase tracking-wide text-center">
                Our Programs
            </p>

            {/* Large Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mt-2 text-center">
                Explore What We Offer
            </h2>

            {/* Small Text */}
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-center">
                We provide a variety of programs designed to help students excel in academics and beyond.
                Choose the one that fits your learning style and goals.
            </p>

            {/* Cards */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                {cardsData.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        // whileHover={{ y: -8, scale: 1.02 }}
                        className={`bg-gray-50 dark:bg-gray-900 shadow-md rounded-xl p-6 hover:shadow-lg hover:-translate-y-2 transition transform duration-300 cursor-pointer ${cardColors[index]}`}
                    >
                        {/* Header with Icon */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`h-10 w-10 flex items-center justify-center ${cardBgColors[index]} rounded-full `}>
                                {card.icon}
                            </div>
                            <h3 className={`text-3xl font-bold ${cardTextColors[index]}`}>{card.title}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 text-xl text-left mb-4">{card.description}</p>

                        {/* Program Includes */}
                        <h4 className="text-2xl text-left font-bold text-gray-700 dark:text-gray-200 mb-2">
                            Program Includes:
                        </h4>
                        <div className="space-y-2">
                            {card.modules.map((mod, idx) => (
                                <Dropdown key={idx} title={mod.head} content={mod.content} color={cardTextColors[index]} />
                            ))}
                        </div>

                        <div className= {`${cardApproackColors[index]} mt-6 p-4 rounded-lg`}>
                            <h4 className="text-lg text-left font-bold text-gray-700 dark:text-gray-900 mb-2 mt-4">
                                Our Approach:
                            </h4>
                            <p className="text-gray-600 dark:text-gray-900 text-md text-left mt-2">{card.approach}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    )
}

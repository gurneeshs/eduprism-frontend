import { motion } from "framer-motion";
import { Globe, Database, Shield, Users } from "lucide-react";

const firstRowCards = [
    {
        color: "border-blue-500",
        img: "/platforms/googleclassroom.JPEG",
        title: "Google Classroom",
        desc: "Streamlined assignment distribution, grading, and communication in a familiar Google environment that enhances productivity.",
        tags: ["Assignment Management", "Real-time Collaboration"],
        tagColors: ["bg-blue-100 text-blue-700", "bg-green-100 text-green-700"],
    },
    {
        color: "border-green-500",
        img: "/platforms/PencilSpaces.JPEG",
        title: "Pencil Spaces",
        desc: "Interactive digital workspace for collaborative learning, note-taking, and creative problem-solving in an engaging environment.",
        tags: ["Digital Whiteboard", "Collaboration Tools"],
        tagColors: ["bg-yellow-100 text-yellow-700", "bg-red-100 text-red-700"],
    },
    {
        color: "border-purple-500",
        img: "/platforms/pearassessment.PNG",
        title: "Pear Assessment",
        desc: "Comprehensive assessment tools that provide detailed insights into student performance and learning gaps with advanced analytics.",
        tags: ["Performance Analytics", "Progress Tracking"],
        tagColors: ["bg-purple-100 text-purple-700", "bg-pink-100 text-pink-700"],
    },
];

const secondRowCards = [
    {
        color: "border-red-500",
        icon: <Globe className="w-8 h-8 text-red-500" />,
        title: "Integrated Access",
        desc: "Log in to all platforms through a single portal for a streamlined experience.",
    },
    {
        color: "border-blue-500",
        icon: <Database className="w-8 h-8 text-blue-500" />,
        title: "Progress Tracking",
        desc: "Keep track of your learning milestones and achievements across platforms.",
    },
    {
        color: "border-green-500",
        icon: <Shield className="w-8 h-8 text-green-500" />,
        title: "User-Friendly Interface",
        desc: "Navigate through your educational resources with an intuitive and accessible design.",
    },
    {
        color: "border-purple-500",
        icon: <Users className="w-8 h-8 text-purple-500" />,
        title: "24/7 Support",
        desc: "Access help and support whenever you need it by contacting learn@eduprism.com.au.",
    },
];

export default function Platforms() {
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16">
            {/* Headings */}
            <p className="text-md md:text-xl uppercase tracking-wider text-blue-600 font-semibold text-center">
                Our Platforms
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mt-2 text-center">
                Platforms That Drive Success
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-center">
                Explore the diverse platforms we offer to empower learners and professionals.
                Each designed with innovation, growth, and impact in mind.
            </p>

            {/* First Row - Feature Cards */}
            <div className="mt-12 grid gap-8 md:grid-cols-3">
                {firstRowCards.map((card, i) => (
                    <motion.div
                        key={i}
                        className={`group rounded-2xl border-t-8 ${card.color} bg-gray-100 dark:bg-gray-900 shadow-md p-6 flex flex-col items-center text-center 
                  transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-105`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                        {/* Image with hover animation */}
                        <div className="overflow-hidden rounded-lg shadow-md mb-4 w-full">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 group-hover:rounded-2xl"
                            />
                        </div>

                        {/* Text Content */}
                        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">{card.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-xl mt-2">{card.desc}</p>

                        {/* Tags */}
                        <div className="flex gap-3 mt-4">
                            {card.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className={`px-4 py-2 rounded-full text-sm font-medium ${card.tagColors[idx]} transition-all duration-300 hover:scale-110 hover:shadow-md`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>


            {/* Second Row - Icon Cards */}
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {secondRowCards.map((card, i) => (
                    <motion.div
                        key={i}
                        className={`group rounded-2xl border-t-8 ${card.color} bg-gray-100 dark:bg-gray-800 shadow-md p-6 text-center 
                  transform transition-all duration-500 hover:rotate-1 hover:-translate-y-2 hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-gray-50 dark:hover:bg-gradient-to-br dark:hover:from-gray-800 dark:hover:to-gray-900`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                        {/* Icon with hover effect */}
                        <div className="flex justify-center mb-4 transition-transform duration-500 group-hover:scale-125">
                            {card.icon}
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{card.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg mt-2">{card.desc}</p>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}

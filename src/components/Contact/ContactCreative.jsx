import { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Users,
    Mail,
    Phone,
    BookOpen,
    Info,
    Search,
} from "lucide-react";

export default function ContactCreative() {
    const [studentType, setStudentType] = useState("Adult");
    const [activeStep, setActiveStep] = useState(0); // 0: Student, 1: Parent, 2: Extras
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        subject: "No Preferred Subject",
        studentEmail: "",
        studentPhone: "",
        parentFirst: "",
        parentLast: "",
        parentEmail: "",
        parentPhone: "",
        heardFrom: "",
    });

    const steps = [
        { title: "Student Info", icon: <User className="w-5 h-5" /> },
        { title: "Parent Info", icon: <Users className="w-5 h-5" /> },
        { title: "Extras", icon: <Info className="w-5 h-5" /> },
    ];

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // handle submit - send to api or state
        console.log("submit", { studentType, ...form });
        alert("Form submitted (check console)");
    }

    return (
        <section id="contact" className="py-20 px-4 md:px-8 lg:px-12 ">
            <div className="max-w-7xl mx-auto">
                <p className=" text-md md:text-xl uppercase tracking-wider text-blue-700 font-semibold text-center">
                    Get in Touch
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-200 text-center mt-2">
                    Contact & Enrollment
                </h2>
                <p className="text-center text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
                    Ready to start your learning journey? Get in touch with our team to discuss your academic goals and discover how our personalized approach can help you succeed.
                </p>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 items-start">
                    {/* Left - Image / Decorative */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full h-full rounded-2xl overflow-hidden"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=5b9a5f1c29d8ecf03ce6f3b1a7c0e3d9"
                            alt="students"
                            className="w-full h-96 object-cover rounded-2xl shadow-lg"
                        />
                        {/* Decorative floating badges */}
                        <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-400 to-indigo-500 text-white px-3 py-2 rounded-xl shadow-lg transform rotate-6">
                            <div className="flex items-center gap-2 text-sm font-semibold">
                                <BookOpen className="w-4 h-4" /> Live Classes
                            </div>
                        </div>
                        <div className="absolute -bottom-6 left-6 bg-white/80 px-3 py-2 rounded-full shadow-md">
                            <div className="flex items-center gap-2 text-sm text-gray-800">
                                <Users className="w-4 h-4" /> Community
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Creative Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 lg:overflow-y-scroll lg:max-h-[400px]"
                    >
                        {/* Grid layout: stepper + fields */}
                        <div className="lg:grid lg:grid-cols-[140px_1fr] lg:gap-6">
                            {/* Stepper column */}
                            <div className="hidden lg:block">
                                <div className="sticky top-2 space-y-6">
                                    {steps.map((s, i) => {
                                        const isActive = activeStep === i;
                                        const completed = (() => {
                                            if (i === 0) {
                                                return form.firstName || form.studentEmail;
                                            }
                                            if (i === 1) {
                                                return form.parentFirst || form.parentEmail;
                                            }
                                            return form.heardFrom;
                                        })();
                                        return (
                                            <div key={i} className="flex items-center gap-4">
                                                <div
                                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-md transition 
                          ${isActive ? "bg-blue-500 dark:bg-blue-400 scale-105" : completed ? "bg-lightgreen-500" : "bg-gray-400 text-gray-700 dark:bg-gray-600 daark:text-gray-200"}`}
                                                >
                                                    {i + 1}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-gray-800">
                                                        {s.title}
                                                    </div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300">{i === 0 ? "Student details" : i === 1 ? "Parent & school" : "Extras & notes"}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Fields column */}
                            <div className="mt-6 lg:mt-0">
                                {/* Student Info Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    className="rounded-xl border border-gray-400 p-5 mb-6"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-blue-50 p-2 rounded-md">
                                                <User className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800">Student Info</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300">Primary details for class access</p>
                                            </div>
                                        </div>

                                        {/* Segmented control for Student Type */}
                                        <div className="inline-flex rounded-full bg-gray-100 p-1">
                                            {["Adult", "Child"].map((type) => (
                                                <button
                                                    key={type}
                                                    type="button"
                                                    onClick={() => setStudentType(type)}
                                                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition
                            ${studentType === type ? "bg-blue-200 shadow text-gray-900" : "text-gray-600"}`}
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Floating label inputs grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {/* First Name */}
                                        <div className="relative">
                                            <input
                                                name="firstName"
                                                value={form.firstName}
                                                onChange={handleChange}
                                                onFocus={() => setActiveStep(0)}
                                                placeholder=" "
                                                className="peer w-full dark:text-gray-200 border-2 border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent focus:border-blue-300 focus:shadow-md transition"
                                                id="firstName"
                                            />
                                            <label
                                                htmlFor="firstName"
                                                className="absolute left-4 top-3 text-gray-500 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
                                            >
                                                {form.firstName ? " " : "first Name"}
                                            </label>
                                        </div>

                                        {/* Last Name */}
                                        <div className="relative">
                                            <input
                                                name="lastName"
                                                value={form.lastName}
                                                onChange={handleChange}
                                                onFocus={() => setActiveStep(0)}
                                                placeholder=" "
                                                className="peer w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent focus:border-blue-300 focus:shadow-md transition"
                                                id="lastName"
                                            />
                                            <label
                                                htmlFor="lastName"
                                                className="absolute left-4 top-3 text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
                                            >
                                                {form.lastName ? " " : "last Name"}
                                            </label>
                                        </div>

                                        {/* Subject (select) */}
                                        <div className="relative sm:col-span-2">
                                            <select
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                onFocus={() => setActiveStep(0)}
                                                className="w-full border-2 border-gray-300 dark:border-gray-600 dark:text-gray-200 rounded-lg px-4 py-3 bg-transparent focus:border-blue-300 transition"
                                                id="subject"
                                            >
                                                <option className="dark:bg-gray-900">No Preferred Subject</option>
                                                <option className="dark:bg-gray-900">Mathematics</option>
                                                <option className="dark:bg-gray-900">Science</option>
                                                <option className="dark:bg-gray-900">English</option>
                                            </select>
                                            <label
                                                htmlFor="subject"
                                                className="absolute -top-3 left-4 text-xs  px-1 text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300"
                                            >
                                            
                                            </label>
                                        </div>

                                        {/* Student Email */}
                                        <div className="relative sm:col-span-2">
                                            <input
                                                name="studentEmail"
                                                value={form.studentEmail}
                                                onChange={handleChange}
                                                onFocus={() => setActiveStep(0)}
                                                placeholder=" "
                                                required
                                                className="peer w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent focus:border-blue-300 focus:shadow-md transition"
                                                id="studentEmail"
                                                type="email"
                                            />
                                            <label
                                                htmlFor="studentEmail"
                                                className="absolute left-4 top-3 text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
                                            >
                                                {form.studentEmail ? " " : "Student Email *"}
                                            </label>
                                            <p className="text-xs text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 mt-2">This is important as the class access will be given to this email.</p>
                                        </div>

                                        {/* Student Phone */}
                                        <div className="relative sm:col-span-2">
                                            <input
                                                name="studentPhone"
                                                value={form.studentPhone}
                                                onChange={handleChange}
                                                onFocus={() => setActiveStep(0)}
                                                placeholder=" "
                                                className="peer w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent focus:border-blue-300 focus:shadow-md transition"
                                                id="studentPhone"
                                                type="tel"
                                            />
                                            <label
                                                htmlFor="studentPhone"
                                                className="absolute left-4 top-3 text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
                                            >
                                                {form.studentPhone ? " " : "Student Phone (Optional)"}
                                            </label>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Parent Info Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.05 }}
                                    className="rounded-xl border border-gray-400 p-5 mb-6"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-green-50 p-2 rounded-md">
                                            <Users className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Parent Info</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300">Contact for billing & updates</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <input
                                                name="parentFirst"
                                                value={form.parentFirst}
                                                onChange={handleChange}
                                                onFocus={() => setActiveStep(1)}
                                                placeholder=" "
                                                className="peer w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent focus:border-green-300 transition"
                                                id="parentFirst"
                                            />
                                            <label
                                                htmlFor="parentFirst"
                                                className="absolute left-4 top-3 text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
                                            >
                                                {form.parentFirst ? " " : "Parent First Name"}
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <input
                                                name="parentLast"
                                                value={form.parentLast}
                                                onChange={handleChange}
                                                onFocus={() => setActiveStep(1)}
                                                placeholder=" "
                                                className="peer w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent focus:border-green-300 transition"
                                                id="parentLast"
                                            />
                                            <label
                                                htmlFor="parentLast"
                                                className="absolute left-4 top-3 text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
                                            >
                                                {form.parentLast ? " " : "Parent Last Name"}
                                            </label>
                                        </div>

                                        <div className="relative sm:col-span-2">
                                            <input
                                                name="parentEmail"
                                                value={form.parentEmail}
                                                onChange={handleChange}
                                                onFocus={() => setActiveStep(1)}
                                                placeholder=" "
                                                className="peer w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent focus:border-green-300 transition"
                                                id="parentEmail"
                                                type="email"
                                            />
                                            <label
                                                htmlFor="parentEmail"
                                                className="absolute left-4 top-3 text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
                                            >
                                                {form.parentEmail ? " " : "Parent Email"}
                                            </label>
                                        </div>

                                        <div className="relative sm:col-span-2">
                                            <input
                                                name="parentPhone"
                                                value={form.parentPhone}
                                                onChange={handleChange}
                                                onFocus={() => setActiveStep(1)}
                                                placeholder=" "
                                                className="peer w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent focus:border-green-300 transition"
                                                id="parentPhone"
                                                type="tel"
                                            />
                                            <label
                                                htmlFor="parentPhone"
                                                className="absolute left-4 top-3 text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
                                            >
                                                {form.parentPhone ? " " : "Parent Phone"}
                                            </label>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Extras Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    className="rounded-xl border border-gray-400 p-5 mb-6"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-indigo-50 p-2 rounded-md">
                                            <Search className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Extras</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300">Optional info to help us personalize</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="relative">
                                            <input
                                                name="heardFrom"
                                                value={form.heardFrom}
                                                onChange={handleChange}
                                                onFocus={() => setActiveStep(2)}
                                                placeholder=" "
                                                className="peer w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-transparent focus:border-indigo-300 transition"
                                                id="heardFrom"
                                            />
                                            <label
                                                htmlFor="heardFrom"
                                                className="absolute left-4 top-3 text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
                                            >
                                                {form.heardFrom ? " " : "How did you hear about us? (Optional)"}
                                            </label>
                                        </div>

                                        <div>
                                            <label className="text-sm text-gray-500 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300 dark:text-gray-300">Notes (Optional)</label>
                                            <textarea
                                                name="notes"
                                                onFocus={() => setActiveStep(2)}
                                                placeholder="Tell us anything relevant..."
                                                className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 mt-1 focus:border-indigo-300 transition min-h-[90px]"
                                                onChange={(e) => setForm((s) => ({ ...s, notes: e.target.value }))}
                                            />
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Bottom CTA / Summary */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.15 }}
                                    className="rounded-xl p-5 bg-gradient-to-r from-white to-blue-100 dark:bg-gradient-to-r dark:from-gray-700 dark:to-gray-900 border border-gray-400"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Ready to join?</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                {form.firstName ? `${form.firstName} ${form.lastName}` : "Provide student details"} — {studentType}
                                            </p>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.06, boxShadow: "0 12px 30px rgba(59,130,246,0.24)" }}
                                            whileTap={{ scale: 0.98 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="ml-auto inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500 text-white font-semibold"
                                        >
                                            Join Us Today
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

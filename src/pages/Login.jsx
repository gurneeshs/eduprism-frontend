import { motion } from "framer-motion";
import { useState } from "react";
import UserNavbar from "../utils/UserNavbar";
import Footer from "../utils/Footer";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData,navigate);
    // navigate("/User")
  };


  return (
    <>
    {/* <UserNavbar /> */}
    <div
      className="min-h-screen flex items-center justify-center"
      
    >
      {/* <div className="absolute inset-0"></div> */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-gray-50 dark:bg-gray-900 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-lg mx-4"
      >
        <h2 className="text-3xl font-bold text-center dark:text-gray-50 mb-6">
          Welcome To EduPRISM
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block font-semibold dark:text-white mb-2 text-left">Email:</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/20 border border-gray-400 dark:text-white dark:placeholder-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 dark:focus:ring-indigo-400"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <label className="block dark:text-white mb-2 text-left font-semibold">Password:</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-white/20 border border-gray-400 dark:text-white dark:placeholder-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoggingIn}
            className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-700 transition text-white font-semibold shadow-md"
          >
            {isLoggingIn ? (
                <>
                    {/* <Loader2 className="h-5 w-5 animate-spin">Login</Loader2> */}
                    Loading ...
                </>
            ) :("Login")}
          </motion.button>
        </form>
      </motion.div>
    </div>
    {/* <Footer/> */}
    </>

  );
}

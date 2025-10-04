import { motion } from "framer-motion"
import HeroSection from "../components/User/HeroSection"
import UserNavbar from "../utils/UserNavbar"
import Footer from "../utils/Footer"
import ProfileCard from "../components/User/ProfileCard"
import CoursesSection from "../components/User/CoursesSection"
import ProgressSection from "../components/User/ProgressSection"
import Announcements from "../components/User/Announcements"



const User = () => {
    return (
        <>
            <UserNavbar />
            <div className="min-h-screen mt-16 p-4 sm:p-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-7xl mx-auto space-y-10"
                >
                    <HeroSection />
                    <ProfileCard />
                    <CoursesSection />
                    <ProgressSection />
                    <Announcements />
                </motion.div>
            </div>
            <Footer />
        </>
    )
}

export default User;
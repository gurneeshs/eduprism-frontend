
import { useAuthStore } from "../../store/useAuthStore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../../lib/axios";
import { Search, Bell, Gift, Zap, Plus, X , LogOutIcon} from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import { useNavigate } from "react-router-dom";

export default function ChatNavbar({ onGroupCreated }) {
    const navigate = useNavigate()
    const { users, getUsers } = useChatStore();
    const { authUser, logout, isLoggingOut } = useAuthStore();
    const [showModal, setShowModal] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedMembers, setSelectedMembers] = useState([]);
    const [isStudentAllowed,setIsStudentAllowed] = useState(false);
    // console.log(authUser)

    // toggle member selection
    const toggleMember = (userId) => {
        setSelectedMembers((prev) =>
            prev.includes(userId)
                ? prev.filter((id) => id !== userId)
                : [...prev, userId]
        );
    };

    useEffect(() => {
        if (showModal) {
            getUsers()
        }
    }, [showModal])

    const handleLogout = async () => {
        await logout(navigate);
    }


    const handleCreateGroup = async () => {

        if (!groupName.trim() || selectedMembers.length === 0) {
            toast.error("Please enter a group name and select at least one member.");
            return;
        }

        setLoading(true);
        try {
            const res = await axiosInstance.post("/groups/createGroup", {
                name: groupName,
                members: selectedMembers,
                admin: authUser._id,
                isStudentAllowed:isStudentAllowed,
            });

            setShowModal(false);
            setGroupName("");
            setSelectedMembers([]);

            if (res.data.success) {
                toast.success("Group Created SuccessFully")
            }
            else {
                toast.error("Failed to create Group");
            }

        } catch (error) {
            console.error("Error creating group:", error);
            toast.error("Failed to create group");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            {/* Navbar */}
            <header className="w-full bg-gray-100 border-b border-gray-300 shadow-sm px-4 py-1 md:py-3  flex items-center justify-between z-20">

                {/* Left Section - Logo */}
                <div className="items-center gap-2 hidden md:flex">
                    <img src="/logo/logo.gif" alt="Logo" className="h-8" />
                </div>
                <div className="flex items-center md:hidden gap-2">
                    <img src="/logo/small_logo.jpeg" alt="Logo" className="h-12" />
                </div>

                {/* Center Section - Search (Hidden on Mobile) */}
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full px-3 py-1.5 w-[280px] lg:w-[380px]">
                    <Search className="text-gray-700 w-4 h-4 mr-2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent w-full outline-none text-sm text-gray-700 placeholder:text-gray-600"
                    />
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3 sm:gap-4">

                    {/* Create Group Button (hidden for students) */}
                    {authUser?.role !== "student" && (
                        <button
                            onClick={() => setShowModal(true)}
                            className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition"
                        >
                            <Plus className="w-4 h-4" />
                            <span className="hidden lg:inline">Create Group</span>
                        </button>
                    )}

                    {/* Logout Button (icon only on mobile) */}
                    <button
                        onClick={handleLogout}
                        disabled={isLoggingOut}
                        className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition"
                    >
                        <span className="hidden lg:block">
                            {isLoggingOut ? "Logging Out..." : "Logout"}
                        </span>
                        <LogOutIcon className="lg:block w-4 h-4" />
                    </button>

                    {/* Username (hidden on mobile) */}
                    <p className="hidden lg:block font-semibold truncate max-w-[100px]">
                        {authUser?.fullName}
                    </p>

                    {/* User Avatar */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-gray-200">
                        <img
                            src={authUser?.profilePic}
                            alt="User Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </header>

            {/* Create Group Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-3 sm:px-0">
                    <div className="bg-white w-full sm:w-[420px] rounded-lg shadow-lg p-5 sm:p-6 relative max-h-[90vh] overflow-y-auto">

                        {/* Close Button */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            <X />
                        </button>

                        <h2 className="text-lg font-semibold mb-4">Create New Group</h2>

                        <div className="flex flex-col gap-3">

                            {/* Group Name Input */}
                            <input
                                type="text"
                                placeholder="Group Name"
                                value={groupName}
                                onChange={(e) => setGroupName(e.target.value)}
                                className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                            />

                            {/* User Selection List */}
                            <div className="border border-gray-300 rounded-md p-2 h-56 sm:h-48 overflow-y-auto">
                                {users.length === 0 ? (
                                    <p className="text-gray-500 text-sm text-center">No users available</p>
                                ) : (
                                    users.map((user) => (
                                        <div
                                            key={user._id}
                                            onClick={() => toggleMember(user._id)}
                                            className={`flex items-center gap-3 p-2 cursor-pointer rounded-md transition ${selectedMembers.includes(user._id)
                                                ? "bg-blue-100 border border-blue-400"
                                                : "hover:bg-gray-100"
                                                }`}
                                        >
                                            <img
                                                src={user.profilePic || "/avatar/avatar2.jpeg"}
                                                alt={user.fullName}
                                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
                                            />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-800">
                                                    {user.fullName}
                                                </p>
                                                <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                            </div>
                                            {selectedMembers.includes(user._id) && (
                                                <span className="text-blue-300 font-semibold">✓</span>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Create Button */}
                            <button
                                onClick={handleCreateGroup}
                                disabled={loading}
                                className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 mt-2 w-full"
                            >
                                {loading ? "Creating..." : "Create Group"}
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
}

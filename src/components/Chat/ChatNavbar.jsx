
import { useAuthStore } from "../../store/useAuthStore";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../../lib/axios";
import { Search, Bell, Gift, Zap, Plus, X } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";

export default function ChatNavbar({ onGroupCreated }) {
    const { users, getUsers } = useChatStore();
    const { authUser } = useAuthStore();
    const [showModal, setShowModal] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedMembers, setSelectedMembers] = useState([]);
    console.log(authUser)

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


    const handleCreateGroup = async () => {

        if (!groupName.trim() || selectedMembers.length === 0) {
            alert("Please enter a group name and select at least one member.");
            return;
        }

        setLoading(true);
        try {
            const res = await axiosInstance.post("/groups/createGroup", {
                name: groupName,
                members: selectedMembers,
                admin: authUser._id,
            });

            setShowModal(false);
            setGroupName("");
            setSelectedMembers([]);

            if (res.data.success) {
                toast.success("Group Created SuccessFully")
            }
            else{
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
            <header className="w-full bg-gray-100 border-b border-gray-300 shadow-sm px-6 py-3 flex items-center justify-between z-20">
                {/* Left Section - Logo */}
                <div className="flex items-center">
                    <img src="/logo/logo.gif" alt="Logo" className="h-10" />
                </div>

                {/* Center Section - Search */}
                <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-[380px]">
                    <Search className="text-gray-700 w-4 h-4 mr-2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent w-full outline-none text-sm text-gray-700 placeholder:text-gray-600"
                    />
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Create Group Button */}
                    <button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-1 bg-blue-500 text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
                    >
                        <Plus className="w-4 h-4" />
                        Create Group
                    </button>


                    {/* <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition" />
                    <Gift className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black transition" /> */}

                    <p className="font-semibold">{authUser?.fullName}</p>

                    <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200">
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
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white w-[420px] rounded-lg shadow-lg p-6 relative">
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
                            <div className="border border-gray-300 rounded-md p-2 h-48 overflow-y-auto">
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
                                                className="w-9 h-9 rounded-full object-cover"
                                            />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-800">
                                                    {user.fullName}
                                                </p>
                                                <p className="text-xs text-gray-500">{user.email}</p>
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
                                className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 mt-2"
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

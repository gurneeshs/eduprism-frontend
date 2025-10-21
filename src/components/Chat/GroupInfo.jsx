import {
    X,
    UserPlus,
    UserMinus,
    Trash2,
    MessageSquareOff,
    MessageSquare,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useAuthStore } from "../../store/useAuthStore";
import { axiosInstance } from "../../lib/axios";
import toast from "react-hot-toast";

const GroupInfo = ({ group, onClose }) => {
    const [isChatAllowed, setIsChatAllowed] = useState(group.isChatAllowed ?? true);
    const [showAddMemberModal, setShowAddMemberModal] = useState(false);
    const [allUsers, setAllUsers] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Filter users by search term
    const filteredUsers = allUsers.filter(
        (u) =>
            u.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // console.log(isChatAllowed)
    const { authUser } = useAuthStore();
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(false);
    const isAdmin = authUser?._id === group.admin;
    const [isToggleing, setIsToggleing] = useState(false);

    // ✅ Prevent background scroll while open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    // Fetch member details
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const res = await axiosInstance.post("/groups/getUsers/bulk", { ids: group.members });
                setMembers(res.data);
                console.log(res.data)
            } catch (err) {
                console.error("Failed to load members:", err);
                setMembers(group.members.map((id) => ({ _id: id, name: "Unknown User" })));
            }
        };
        fetchMembers();
    }, [group.members]);

    const handleAddStudent = async () => {
        try {
            setLoading(true);
            const res = await axiosInstance.get(`/groups/${group._id}/availableUsers`);
            setAllUsers(res.data);
            setShowAddMemberModal(true);
        } catch (err) {
            toast.error("Failed to load users");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };



    const handleRemoveStudent = async (id) => {
        if (!confirm("Remove this member?")) return;
        try {
            setLoading(true);
            await axiosInstance.post(`/groups/${group._id}/removeMember`, { userId: id });
            setMembers(members.filter((m) => m._id !== id));
        } catch {
            toast.error("Failed to remove member");
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteGroup = async () => {
        if (!confirm("Are you sure you want to delete this group?")) return;
        try {
            await axiosInstance.delete(`/api/groups/${group._id}`);
            toast.success("Group deleted!");
            onClose();
        } catch {
            toast.error("Error deleting group");
        }
    };

    const handleToggleChat = async () => {
        try {
            setIsToggleing(true);
            const res = await axiosInstance.put(`/groups/${group._id}/toggleChat`);
            // console.log(res.data);
            setIsChatAllowed(res.data.isChatAllowed);
        } catch (err) {
            console.error("Failed to toggle chat:", err);
            toast("Error toggling chat permission");
        } finally {
            setIsToggleing(false);
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/30 flex justify-end z-50 overflow-hidden"
                onClick={onClose}
            >
                <motion.div
                    key="drawer"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 80, damping: 20 }}
                    onClick={(e) => e.stopPropagation()}
                    className="w-96 bg-white h-full shadow-xl flex flex-col"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-lg font-semibold">Group Info</h2>
                        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                            <X size={22} />
                        </button>
                    </div>

                    {/* Group details */}
                    <div className="flex flex-col items-center p-4 border-b">
                        {group.profilePic ? (
                            <img
                                src={group.profilePic}
                                alt={group.name}
                                className="w-20 h-20 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-semibold">
                                {group.name?.[0]?.toUpperCase()}
                            </div>
                        )}
                        <h3 className="mt-2 text-xl font-semibold">{group.name}</h3>
                        <p className="text-gray-500 text-sm text-center mt-1">
                            Created on {new Date(group.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            Admin: {isAdmin ? "You" : group.admin}
                        </p>
                    </div>

                    {/* Members list */}
                    <div className="flex-1 overflow-y-auto p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">Members</h4>
                            {isAdmin && (
                                <button
                                    onClick={handleAddStudent}
                                    disabled={loading}
                                    className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm"
                                >
                                    <UserPlus size={16} /> Add
                                </button>
                            )}
                        </div>

                        <ul className="space-y-2">
                            {members.map((m, i) => (
                                <li
                                    key={i}
                                    className="flex items-center justify-between bg-gray-50 p-2 rounded-md"
                                >
                                    {/* Left section: Profile image + name */}
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={m.profilePic || "/default-avatar.png"} // fallback image
                                            alt={m.fullName || "User"}
                                            className="w-8 h-8 rounded-full object-cover border border-gray-300"
                                        />
                                        <span className="font-medium">
                                            {authUser._id.toString() === m._id.toString() ? "You" : m.fullName}
                                        </span>
                                    </div>

                                    {/* Right section: Remove button (admin only, not for self/admin) */}
                                    {isAdmin && m._id !== group.admin && (
                                        <button
                                            onClick={() => handleRemoveStudent(m._id)}
                                            disabled={loading}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <UserMinus size={16} />
                                        </button>
                                    )}
                                </li>

                            ))}
                        </ul>
                    </div>

                    {/* Actions */}
                    {isAdmin && (
                        <div className="border-t p-4 flex flex-col gap-2">
                            <button
                                onClick={() => handleToggleChat()}
                                disabled={isToggleing}
                                className="flex items-center gap-2 justify-center bg-gray-100 hover:bg-gray-200 py-2 rounded-md cursor-pointer"
                            >
                                {isChatAllowed ? (
                                    <>
                                        {isToggleing ? "Disabling Chat..." : (<><MessageSquareOff size={18} className="text-red-500" />Disable Chat</>)}

                                    </>
                                ) : (
                                    <>
                                        {isToggleing ? "Enabling Chat..." : (<><MessageSquare size={18} className="text-green-500" />Enable Chat</>)}

                                    </>
                                )}
                            </button>

                            <button
                                onClick={handleDeleteGroup}
                                disabled={loading}
                                className="flex items-center gap-2 justify-center bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
                            >
                                <Trash2 size={18} /> Delete Group
                            </button>
                        </div>
                    )}
                </motion.div>
            </motion.div>
            {showAddMemberModal && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-3 sm:px-0">
                    <div className="bg-white w-full sm:w-[420px] rounded-lg shadow-lg p-5 sm:p-6 relative max-h-[90vh] overflow-y-auto">
                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setShowAddMemberModal(false);
                                setSelectedUsers([]);
                                setSearchTerm("");
                            }}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            <X />
                        </button>

                        <h2 className="text-lg font-semibold mb-4">Add Members to Group</h2>

                        {/* Search Input */}
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="border border-gray-300 rounded-md p-2 mb-3 w-full focus:ring-2 focus:ring-blue-400"
                        />

                        {/* User List */}
                        <div className="border border-gray-300 rounded-md p-2 h-56 sm:h-64 overflow-y-auto">
                            {filteredUsers.length === 0 ? (
                                <p className="text-gray-500 text-sm text-center">No users available</p>
                            ) : (
                                filteredUsers.map((user) => (
                                    <div
                                        key={user._id}
                                        onClick={() =>
                                            setSelectedUsers((prev) =>
                                                prev.includes(user._id)
                                                    ? prev.filter((id) => id !== user._id)
                                                    : [...prev, user._id]
                                            )
                                        }
                                        className={`flex items-center gap-3 p-2 cursor-pointer rounded-md transition ${selectedUsers.includes(user._id)
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
                                        {selectedUsers.includes(user._id) && (
                                            <span className="text-blue-500 font-semibold">✓</span>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Add Button */}
                        <button
                            onClick={async () => {
                                try {
                                    if (selectedUsers.length === 0) {
                                        toast.error("Please select at least one user");
                                        return;
                                    }
                                    setLoading(true);
                                    await axiosInstance.post(`/groups/${group._id}/addMember`, {
                                        userIds: selectedUsers,
                                    });
                                    toast.success("Members added successfully");
                                    setMembers([
                                        ...members,
                                        ...allUsers.filter((u) => selectedUsers.includes(u._id)),
                                    ]);
                                    setShowAddMemberModal(false);
                                    setSelectedUsers([]);
                                } catch (err) {
                                    console.error(err);
                                    toast.error("Failed to add members");
                                } finally {
                                    setLoading(false);
                                }
                            }}
                            disabled={loading}
                            className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 mt-4 w-full"
                        >
                            {loading ? "Adding..." : "Add Selected Members"}
                        </button>
                    </div>
                </div>
            )}

        </AnimatePresence>
    );
};

export default GroupInfo;

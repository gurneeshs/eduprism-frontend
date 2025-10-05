import React from 'react'
import { useChatStore } from '../../store/useChatStore'
import { useAuthStore } from '../../store/useAuthStore';
import { X } from "lucide-react";

const ChatHeader = () => {
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore();
    return (
        <div className="p-2 px-4 border-b-3 border-gray-300 bg-blue-100 h-15">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                    {/* User info */}
                    <div className="flex items-center gap-3">
                        {/* Profile Image */}
                        <span className="rounded-full border border-gray-300 overflow-hidden w-10 h-10 flex-shrink-0">
                            <img
                                src={selectedUser.profilePic || "/logo/avatar.png"}
                                alt={selectedUser.fullName}
                                className="w-full h-full object-cover"
                            />
                        </span>

                        {/* Name and Status */}
                        <div className="flex flex-col">
                            <h3 className="font-medium leading-tight">{selectedUser.fullName}</h3>
                            <p className="text-sm text-base-content/70 m-0 text-left">
                                {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
                            </p>
                        </div>
                    </div>

                </div>

                {/* Close button */}
                <button onClick={() => setSelectedUser(null)}>
                    <X />
                </button>
            </div>
        </div>
    )
}

export default ChatHeader

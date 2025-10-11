import React from 'react'
import { useChatStore } from '../../store/useChatStore'
import { useAuthStore } from '../../store/useAuthStore';
import { X } from "lucide-react";

const ChatHeader = () => {
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore();
    return (
        <div className="p-2 px-4 border-b-1 border-gray-300 bg-gray-100 h-15 z-10">
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
                            <h3 className="font-medium text-lg leading-tight">{selectedUser.fullName}</h3>
                            {onlineUsers.includes(selectedUser._id) ? (
                                <p className="text-sm text-lightgreen-700 m-0 font-semibold text-left">Online</p>
                            ) : (
                                <p className="text-sm text-red-700 font-semibold m-0 text-left">Offline</p>
                            )}

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

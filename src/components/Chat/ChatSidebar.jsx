import React, { useEffect, useState } from 'react'
import { useChatStore } from '../../store/useChatStore'
import { Users } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

const ChatSidebar = () => {
    const { getUsers, users, getStudents, students, getTeachers, teachers, isStudentLoading, isTeacherLoading, selectedUser, setSelectedUser, isUsersLoading, groups, selectedGroup, isGroupLoading, setSelectedGroup, getGroups, isChatOpen, openChat, closeChat } = useChatStore();
    const { onlineUsers, authUser, tabs } = useAuthStore();
    // console.log(students)
    const [activeTab, setActiveTab] = useState(tabs[0]);
    console.log(tabs[0])


    useEffect(()=>{
        setActiveTab(tabs[0]);
    },[tabs])
    // const selectedUser = {
    //     _id: "2",
    //     profilePic: "avatar/avatar2.jpeg",
    //     name: "John Doe",
    // };


    useEffect(() => {
        getUsers(),
            getGroups()
    }, [getUsers, getGroups])

    useEffect(() => {
        getStudents()
    }, [getStudents])
    useEffect(() => {
        getTeachers()
    }, [getTeachers])

    if (isUsersLoading || isGroupLoading || isStudentLoading || isTeacherLoading) return (<div>Loading Users...</div>)

    return (
        <aside className={`h-full w-full lg:w-80 border-r border-gray-300 transition-transform duration-300 ${isChatOpen ? "-translate-x-full" : "translate-x-0"} lg:translate-x-0 flex 
        flex-col bg-gray-100 absolute lg:relative z-10`}>
            {/* ===== Header Section ===== */}
            <div className="border-b border-gray-300 w-full p-1 pb-2 lg:p-4 pl-6">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-xl hidden lg:block">Messages</span>
                    </div>

                    {/* ===== Tabs ===== */}
                    <div className="flex gap-2 text-sm font-medium">
                        {tabs?.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`border border-gray-300 px-2 py-1 rounded-full transition-all duration-200 ${activeTab === tab ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-gray-100 text-gray-700"}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== Content Section ===== */}
            <div className="overflow-y-auto w-full">
                {/* Show Users */}
                {activeTab === "Teachers" && (
                    <>
                        {teachers.length === 0 ? (
                            <div className="text-center text-gray-500 py-6">No Teacher found</div>
                        ) : (teachers.map((user) => (
                            <button
                                key={user._id}
                                onClick={() => {
                                    setSelectedUser(user);
                                    setSelectedGroup(null);
                                    openChat()
                                }}
                                className={`w-full p-3 flex items-center gap-3 hover:bg-gray-100 transition-colors border-b border-gray-300 ${selectedUser?._id === user._id ? "bg-blue-100" : ""
                                    }`}
                            >
                                {/* Avatar */}
                                <div className="relative mx-0">
                                    <img
                                        src={user.profilePic || "/avatar/avatar2.jpeg"}
                                        alt={user.fullName}
                                        className="size-12 object-cover rounded-full"
                                    />
                                    {onlineUsers.includes(user._id) && (
                                        <span className="absolute bottom-0 right-0 size-3 bg-lightgreen-500 rounded-full ring-1 ring-zinc-900"></span>
                                    )}
                                </div>

                                {/* User Info */}
                                <div className="block text-left min-w-0">
                                    <div className="font-semibold text-md truncate">{user.fullName}</div>
                                    {onlineUsers.includes(user._id) ? (
                                        <div className="text-sm text-lightgreen-700 font-semibold">Online</div>
                                    ) : (
                                        <div className="text-sm text-red-700 font-semibold">Offline</div>
                                    )}
                                </div>
                            </button>
                        )))}

                    </>
                )}

                {activeTab === "Students" && (
                    <>
                        {students.length === 0 ? (
                            <div className="text-center text-gray-500 py-6">No Student found</div>
                        ) : (
                            students.map((user) => (
                                <button
                                    key={user._id}
                                    onClick={() => {
                                        setSelectedUser(user);
                                        setSelectedGroup(null);
                                        openChat()
                                    }}
                                    className={`w-full p-3 flex items-center gap-3 hover:bg-gray-100 transition-colors border-b border-gray-300 ${selectedUser?._id === user._id ? "bg-blue-100" : ""
                                        }`}
                                >
                                    {/* Avatar */}
                                    <div className="relative mx-0">
                                        <img
                                            src={user.profilePic || "/avatar/avatar2.jpeg"}
                                            alt={user.fullName}
                                            className="size-12 object-cover rounded-full"
                                        />
                                        {onlineUsers.includes(user._id) && (
                                            <span className="absolute bottom-0 right-0 size-3 bg-lightgreen-500 rounded-full ring-1 ring-zinc-900"></span>
                                        )}
                                    </div>

                                    {/* User Info */}
                                    <div className="block text-left min-w-0">
                                        <div className="font-semibold text-md truncate">{user.fullName}</div>
                                        {onlineUsers.includes(user._id) ? (
                                            <div className="text-sm text-lightgreen-700 font-semibold">Online</div>
                                        ) : (
                                            <div className="text-sm text-red-700 font-semibold">Offline</div>
                                        )}
                                    </div>
                                </button>
                            )))}
                    </>
                )}

                {/* Show Groups */}
                {activeTab === "Groups" && (
                    <>
                        {groups.length === 0 ? (
                            <div className="text-center text-gray-500 py-6">No groups found</div>
                        ) : (
                            groups.map((group) => (
                                <button
                                    key={group._id}
                                    onClick={() => {
                                        setSelectedGroup(group);
                                        setSelectedUser(null);
                                        openChat();
                                    }}
                                    className={`w-full p-3 flex items-center gap-3 hover:bg-gray-100 transition-colors border-b border-gray-300 ${selectedGroup?._id === group._id ? "bg-blue-100" : ""
                                        }`}
                                >
                                    {/* Group Avatar */}
                                    <div className="relative mx-0">
                                        <img
                                            src={group.groupImage || "/group.png"}
                                            alt={group.name}
                                            className="size-12 object-cover rounded-full border"
                                        />
                                    </div>

                                    {/* Group Info */}
                                    <div className="block text-left min-w-0">
                                        <div className="font-semibold text-md truncate">{group.name}</div>
                                        <div className="text-sm text-gray-500 truncate">
                                            {group.members?.length || 0} members
                                        </div>
                                    </div>
                                </button>
                            ))
                        )}
                    </>
                )}
            </div>
        </aside>
    );
}

export default ChatSidebar

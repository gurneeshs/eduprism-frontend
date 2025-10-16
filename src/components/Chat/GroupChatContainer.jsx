import React, { useEffect, useRef } from "react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./MessageSkeleton";

import GroupHeader from "./GroupHeader";
import GroupMessageInput from "./GroupMessageInput";
import dayjs from 'dayjs';
import calendar from "dayjs/plugin/calendar";
dayjs.extend(calendar);


const GroupChatContainer = () => {
    const {
        messages,
        getGroupMessages,
        isMessagesLoading,
        selectedGroup,
        subscribeToGroupMessages,
        unsubscribeFromGroupMessages,
        isChatOpen
    } = useChatStore();

    const { authUser } = useAuthStore();
    const messageEndRef = useRef(null);

    useEffect(() => {
        subscribeToGroupMessages();
    }, [subscribeToGroupMessages])

    // Fetch messages and subscribe on mount
    useEffect(() => {
        if (!selectedGroup?._id) return;

        getGroupMessages(selectedGroup._id);
        return () => unsubscribeFromGroupMessages(selectedGroup._id);
    }, [
        selectedGroup?._id,
        getGroupMessages,
        // subscribeToGroupMessages,
        unsubscribeFromGroupMessages,
    ]);

    // Auto-scroll to latest message
    useEffect(() => {
        if (messageEndRef.current && messages) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const formatMessageTime = (date) =>
        new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date(date));

    const groupMessagesByDate = (msgs) => {
        return msgs.reduce((acc, msg) => {
            const dateKey = dayjs(msg.createdAt).format('YYYY-MM-DD');
            if (!acc[dateKey]) acc[dateKey] = [];
            acc[dateKey].push(msg);
            return acc;
        }, {});
    };
    const groupedMessages = groupMessagesByDate(messages || []);

    if (isMessagesLoading)
        return (
            <div className="flex-1 flex flex-col overflow-auto">
                <GroupHeader />
                <MessageSkeleton />
                <GroupMessageInput />
            </div>
        );

    if (!selectedGroup)
        return (
            <div className="flex-1 flex items-center justify-center text-gray-500">
                Select a group to start chatting
            </div>
        );

    return (
        <div className={`flex-1 flex flex-col overflow-auto chatContainer transition-transform duration-300 ${isChatOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0 absolute lg:relative`}>
            <GroupHeader />

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                {messages.length === 0 ? (
                    <p className="text-center text-gray-500 mt-10">
                        No messages yet. Start the conversation!
                    </p>
                ) : (
                    Object.keys(groupedMessages).map((date) => (
                        <div key={date}>
                            <div className="flex justify-center my-3">
                                <span className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                                    {dayjs(date).calendar(null, {
                                        sameDay: '[Today]',
                                        lastDay: '[Yesterday]',
                                        lastWeek: 'dddd, MMM D',
                                        sameElse: 'MMM D, YYYY',
                                    })}
                                </span>
                            </div>
                    {groupedMessages[date].map((message) => {
                            const isOwnMessage = message.senderId == authUser._id;
                            {/* console.log(message.senderId._id, " ", authUser._id) */}

                            return (
                            <div
                                key={message._id}
                                ref={messageEndRef}
                                className={`flex my-2 items-start gap-3 ${isOwnMessage ? "flex-row-reverse" : "flex-row"
                                    }`}
                            >
                                {/* Avatar */}
                                <div className="w-10 h-10 rounded-full border overflow-hidden">
                                    <img
                                        src={
                                            message.senderId.profilePic ||
                                            (isOwnMessage ? authUser.profilePic : "/avatar.png")
                                        }
                                        alt={message.senderName}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Message Content */}
                                <div
                                    className={`flex flex-col ${isOwnMessage ? "items-end" : "items-start"
                                        } gap-1`}
                                >
                                    {/* Sender name (only show if not your own message) */}
                                    {/* Message Metadata (Sender Name + Time) */}

                                    {/* Message Bubble */}
                                    <div
                                        className={`rounded-2xl p-3 max-w-xs break-words shadow-sm ${isOwnMessage
                                            ? "bg-blue-500 text-gray-50 rounded-tr-none"
                                            : "bg-lightgreen-500 text-gray-50 rounded-tl-none"
                                            }`}
                                    >
                                        <div className="text-xs">
                                            {!isOwnMessage ? (
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold">{message.senderName}</span>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>

                                        {message.image && (
                                            <img
                                                src={message.image}
                                                alt="Attachment"
                                                className="max-w-[200px] rounded-md mb-2"
                                            />
                                        )}
                                        {message.text && <p className=" text-left">{message.text}</p>}
                                        <div className="flex items-center">
                                            <time className="w-full text-xs text-right">{formatMessageTime(message.createdAt)}</time>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            );
                        })}

                        </div>


                    )))}
            </div>

            <GroupMessageInput />
        </div>
    );
};

export default GroupChatContainer;

/* --- Group Header --- */

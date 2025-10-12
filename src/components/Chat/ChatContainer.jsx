import React, { useEffect, useRef } from 'react'
import { useChatStore } from '../../store/useChatStore'
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import MessageSkeleton from './MessageSkeleton';
import { useAuthStore } from '../../store/useAuthStore';

const ChatContainer = () => {
    const { messages, getMessages, isMessagesLoding, selectedUser, subscribeToMessages, unsubscribeFromMessages,isChatOpen, openChat, closeChat } = useChatStore();
    const {authUser} = useAuthStore();
    const messageEndRef = useRef(null);

    useEffect(()=>{
        subscribeToMessages();
    },[subscribeToMessages])
    
    useEffect(() => {
        getMessages(selectedUser._id)
        return () =>{unsubscribeFromMessages()}

    }, [selectedUser._id, getMessages, unsubscribeFromMessages])

    useEffect(() => {
        if(messageEndRef.current && messages){
            messageEndRef.current.scrollIntoView({behavior:"smooth"});
        }
    },[messages]);

    const formatMessageTime = (date) =>
        new Intl.DateTimeFormat("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date(date));

    if (isMessagesLoding) return (
        <div className='flex-1 flex flex-col overflow-auto'>
            <ChatHeader />
            <MessageSkeleton />
            <MessageInput />

        </div>)


    return (
        <div className={`flex-1 flex flex-col overflow-auto chatContainer transition-transform duration-300 ${isChatOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0 absolute lg:relative`}>
            <ChatHeader />
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-transparent">
            
                {messages.map((message) => {
                    const isOwnMessage = message.senderId === authUser._id;

                    return (
                        <div
                            key={message._id}
                            ref={messageEndRef}
                            className={`flex items-start gap-3 ${isOwnMessage ? "flex-row-reverse" : "flex-row"}`}
                        >
                            {/* Avatar */}
                            <div className="w-10 h-10 rounded-full border overflow-hidden">
                                <img
                                    src={
                                        isOwnMessage
                                            ? authUser.profilePic || "/avatar.png"
                                            : selectedUser.profilePic || "/avatar.png"
                                    }
                                    alt="profile pic"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Message Content */}
                            <div className={`flex flex-col ${isOwnMessage ? "items-end" : "items-start"} gap-1`}>
                                {/* Timestamp */}
                                <time className="text-xs text-gray-500">
                                    {formatMessageTime(message.createdAt)}
                                </time>

                                {/* Message Bubble */}
                                <div
                                    className={`rounded-2xl p-3 max-w-xs break-words shadow-sm ${isOwnMessage
                                        ? "bg-blue-500 text-gray-50 rounded-tr-none"
                                        : "bg-lightgreen-500 text-gray-50 rounded-tl-none"
                                        }`}
                                >
                                    {/* Image Attachment */}
                                    {message.image && (
                                        <img
                                            src={message.image}
                                            alt="Attachment"
                                            className="max-w-[200px] rounded-md mb-2"
                                        />
                                    )}

                                    {/* Text Message */}
                                    {message.text && <p>{message.text}</p>}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <MessageInput />

        </div>
    )
}

export default ChatContainer

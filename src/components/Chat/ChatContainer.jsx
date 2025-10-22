import React, { useEffect, useRef } from 'react';
import { useChatStore } from '../../store/useChatStore';
import ChatHeader from './ChatHeader';
import MessageInput from './MessageInput';
import MessageSkeleton from './MessageSkeleton';
import { useAuthStore } from '../../store/useAuthStore';
import dayjs from 'dayjs';
import calendar from "dayjs/plugin/calendar";
dayjs.extend(calendar);

const ChatContainer = () => {
  const {
    messages,
    firstUnreadMessageId,
    getMessages,
    isMessagesLoding,
    selectedUser,
    subscribeToMessages,
    subscribeToGroupMessages,
    selectedGroup,
    unsubscribeFromMessages,
    isChatOpen,
  } = useChatStore();

  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  // subscribe to new messages
  useEffect(() => {
    if (!selectedUser?._id) return;

    // 1️⃣ Fetch chat history
    getMessages(selectedUser._id);

    // 2️⃣ Subscribe to socket updates for this chat
    subscribeToMessages(selectedUser._id);

    // 3️⃣ Cleanup on user change or component unmount
    return () => {
      unsubscribeFromMessages(selectedUser._id);
    };
  }, [selectedUser?._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);


  // auto scroll to bottom on new messages
  useEffect(() => {
    // if (!messages || messages.length === 0) return;

    // Try to scroll to the first unread message first
    if (firstUnreadMessageId) {
      console.log("yes first unread message")
      const unreadElement = document.getElementById(firstUnreadMessageId);

      if (unreadElement) {
        console.log("found unread element")
        unreadElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        return;
      }
    }

    // If no first unread message or element not found — scroll to bottom
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, firstUnreadMessageId]);


  const formatMessageTime = (date) =>
    new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date));

  // ✅ group messages by date
  const groupMessagesByDate = (msgs) => {
    return msgs.reduce((acc, msg) => {
      const dateKey = dayjs(msg.createdAt).format('YYYY-MM-DD');
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(msg);
      return acc;
    }, {});
  };

  const groupedMessages = groupMessagesByDate(messages || []);

  if (isMessagesLoding)
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );

  return (
    <div
      className={`flex-1 flex flex-col overflow-auto chatContainer transition-transform duration-300 ${isChatOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:translate-x-0 absolute lg:relative`}
    >
      <ChatHeader />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-transparent">
        {Object.keys(groupedMessages).map((date) => (
          <div key={date}>
            {/* Date Header */}
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

            {/* Messages for this date */}
            {groupedMessages[date].map((message) => {
              const isOwnMessage = message.senderId === authUser._id;
              return (
                <>
                  <div>
                    {firstUnreadMessageId === message._id && (
                      <div className="flex justify-center my-3">
                        <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">  New Messages  </span>
                      </div>
                    )}
                  </div>
                  <div
                    key={message._id}
                    id={message._id}
                    ref={messageEndRef}
                    className={`flex items-start gap-3 ${isOwnMessage ? 'flex-row-reverse' : 'flex-row'
                      }`}
                  >
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full border overflow-hidden">
                      <img
                        src={
                          isOwnMessage
                            ? authUser.profilePic || '/avatar.png'
                            : selectedUser.profilePic || '/avatar.png'
                        }
                        alt="profile pic"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`flex flex-col ${isOwnMessage ? 'items-end' : 'items-start'
                        } gap-1`}
                    >
                      {/* Time */}
                      <time className="text-xs text-gray-500">
                        {formatMessageTime(message.createdAt)}
                      </time>

                      <div
                        className={`rounded-2xl p-3 max-w-xs break-words shadow-sm ${isOwnMessage
                          ? 'bg-blue-500 text-gray-50 rounded-tr-none'
                          : 'bg-lightgreen-500 text-gray-50 rounded-tl-none'
                          }`}
                      >
                        {/* Image */}
                        {message.image && (
                          <img
                            src={message.image}
                            alt="Attachment"
                            className="max-w-[200px] rounded-md mb-2"
                          />
                        )}
                        {/* Text */}
                        {message.text && <p>{message.text}</p>}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;

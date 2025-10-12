import React from 'react'
import { useChatStore } from '../store/useChatStore'
import UserNavbar from '../utils/UserNavbar';
import Footer from '../utils/Footer';
import NoChatSelected from '../components/Chat/NoChatSelected';
import ChatContainer from '../components/Chat/ChatContainer';
import ChatSidebar from '../components/Chat/ChatSidebar';
import ChatNavbar from '../components/Chat/ChatNavbar';
import { useAuthStore } from '../store/useAuthStore';
import { useEffect } from 'react';
import GroupChatContainer from '../components/Chat/GroupChatContainer';
// import { checkAuth } from '../../../eduprism-backend/chat-service/src/controllers/auth.controller';


const ChatHomePage = () => {
    const {selectedUser,selectedGroup} = useChatStore();
    const {checkAuth} = useAuthStore();

    useEffect(()=>{
        checkAuth()
    },[checkAuth])

  return (
    <div>
        <ChatNavbar />
        <div className='flex items-center justify-center'>
            <div className='rounded-lg shadow-cl w-full h-[calc(88vh)]'>
                <div className='flex h-full rounded-lg overflow-hidden relative'>
                    <ChatSidebar />

                    {!selectedUser ? (!selectedGroup ? <NoChatSelected /> : <GroupChatContainer/>) : (<ChatContainer />)}
                </div>

            </div>
        </div>
        {/* <Footer /> */}
      
    </div>
  )
}

export default ChatHomePage

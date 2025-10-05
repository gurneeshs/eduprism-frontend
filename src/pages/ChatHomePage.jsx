import React from 'react'
import { useChatStore } from '../store/useChatStore'
import UserNavbar from '../utils/UserNavbar';
import Footer from '../utils/Footer';
import NoChatSelected from '../components/Chat/NoChatSelected';
import ChatContainer from '../components/Chat/ChatContainer';
import ChatSidebar from '../components/Chat/ChatSidebar';


const ChatHomePage = () => {
    const {selectedUser} = useChatStore();

  return (
    <div>
        {/* <UserNavbar/> */}
        <div className='flex items-center justify-center'>
            <div className='rounded-lg shadow-cl w-full h-[calc(100vh)]'>
                <div className='flex h-full rounded-lg overflow-hidden'>
                    <ChatSidebar />

                    {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
                </div>

            </div>
        </div>
        {/* <Footer /> */}
      
    </div>
  )
}

export default ChatHomePage

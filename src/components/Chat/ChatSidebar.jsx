import React, { useEffect } from 'react'
import { useChatStore } from '../../store/useChatStore'
import { Users } from 'lucide-react';

const ChatSidebar = () => {
    const {getUsers,users,selectedUser,setSelectedUser,isUsersLoading} = useChatStore();

    let onlineUsers = [];
    useEffect(()=>{
        getUsers()
    },[getUsers])

    if(isUsersLoading) return (<div>Loading Users...</div>)

  return (
    <aside className='h-full w-20 lg:w-72 border-r-3 border-gray-300 flex flex-col transition-all duration-200'>
        <div className='border-b-3 border-gray-300 w-full px-5 bg-blue-100 h-15'>
            <div className='flex items-center gap-2'>
                <img 
                 src='/logo/logo.gif'
                 className=' h-10 my-2' />
                {/* <span className='font-medium hidden lg:block'>EduPrism</span> */}
            </div>

        </div>

        <div className="overflow-y-auto w-full">
            {users.map((user)=>(
                <button
                    key={user._id}
                    onClick={()=> setSelectedUser(user)}
                    className={`
                        w-full p-3 flex items-center gap-3
                        hover:bg-gray-100 transition-colors
                        ${selectedUser?._id === user._id ? "bg-gray-200 ring-1 ring-gray-500" : ""}
                    `}
                >

                <div className='relative mx-auto lg:mx-0'>
                    <img
                        src = {user.profilePic || "/logo/avatar.png"}
                        alt = {user.fullName}
                        className='size-12 object-cover rounded-full'
                     />
                     {onlineUsers.includes(user._id) && (
                        <span
                            className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900"
                        ></span>
                     )}
                </div>
                     
                <div className='hidden lg:block text-left min-w-0'>
                     <div className='font-meidum truncate'>{user.fullName}</div>
                     <div className='text-sm text-red-700'>
                        {onlineUsers.includes(user._id) ? "Online":"Offline"}
                     </div>

                </div>

                    
                </button>
            ))}
        </div>
      
    </aside>
  )
}

export default ChatSidebar

import { create } from 'zustand';
import toast from "react-hot-toast"
import { axiosInstance } from '../lib/axios';
import { useAuthStore } from './useAuthStore';


export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    students: [],
    teachers: [],
    groups: [],
    selectedGroup: null,
    selectedUser: null,
    isUsersLoading: false,
    isStudentLoading: false,
    isTeacherLoading: false,
    isGroupLoading: false,
    isMessagesLoading: false,
    isSendingMessage: false,
    isSendingGroupMessage: false,
    isChatOpen: false,
    unreadCounts: {},
    openChat: () => set({ isChatOpen: true }),
    closeChat: () => set({ isChatOpen: false }),

    incrementUnreadCount: (userId, amount = 1) =>
        set((state) => ({
            unreadCounts: {
                ...state.unreadCounts,
                [userId]: (state.unreadCounts[userId] || 0) + amount,
            },
        })),

    // reset unread count for a user (set to 0)
    resetUnreadCount: (userId) =>
        set((state) => ({
            unreadCounts: {
                ...state.unreadCounts,
                [userId]: 0,
            },
        })),

    getUsers: async () => {
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/users");
            set({ users: res.data });
        } catch (error) {
            toast.error("Error in Getting Users ");
            console.log(error);
        } finally {
            set({ isUsersLoading: false });
        }
    },
    getStudents: async () => {
        set({ isStudentLoading: true });
        try {
            const res = await axiosInstance.get("/messages/students");
            set({ students: res.data });
        } catch (error) {
            toast.error("Error in Getting Users ");
            console.log(error);
        } finally {
            set({ isStudentLoading: false });
        }
    },
    getTeachers: async () => {
        set({ isTeacherLoading: true });
        try {
            const res = await axiosInstance.get("/messages/teachers");
            set({ teachers: res.data });
        } catch (error) {
            toast.error("Error in Getting Users ");
            console.log(error);
        } finally {
            set({ isTeacherLoading: false });
        }
    },
    getGroups: async () => {
        set({ isGroupLoading: true });
        try {
            const res = await axiosInstance.get("/groups/getGroups");
            set({ groups: res.data });
        } catch (error) {
            toast.error("Error in Getting Groups ");
            console.log(error);
        } finally {
            set({ isGroupLoading: false });
        }
    },

    getMessages: async (userId) => {
        set({ isMessagesLoading: true });
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: res.data });
        } catch (error) {
            toast.error("Error in Getting Messages: ");
            console.log(error);
        } finally {
            set({ isMessagesLoading: false });
        }
    },
    getGroupMessages: async (groupId) => {
        set({ isMessagesLoading: true });
        try {
            const res = await axiosInstance.get(`/groups/${groupId}/messages`);
            set({ messages: res.data });
        } catch (err) {
            toast.error("Error in getting Group Message");
            console.log(err);
        }
        finally {
            set({ isMessagesLoading: false });
        }
    },

    sendMessage: async (messageData) => {
        set({ isSendingMessage: true });
        const { selectedUser, messages } = get();
        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
            set({ messages: [...messages, res.data] });
        } catch (error) {
            toast.error("Error in Sending Messages ");
            console.log(error);
        } finally {
            set({ isSendingMessage: false })
        }
    },

    sendGroupMessage: async (messagedata) => {
        set({ isSendingGroupMessage: true })
        const { messages, selectedGroup } = get();
        try {
            // console.log(messagedata);
            const res = await axiosInstance.post(`/groups/${selectedGroup._id}/messages`, messagedata);
            set({ messages: [...messages, res.data] });
        } catch (error) {
            toast.error("Error in Sending Group Message ");
            console.log(error);
        } finally {
            set({ isSendingGroupMessage: false });
        }
    },

    subscribeToMessages: () => {
        const { selectedUser } = get();
        const authUser = useAuthStore.getState().authUser;
        // console.log(authUser)
        if (!selectedUser) return;

        const socket = useAuthStore.getState().socket;

        socket.on("newMessage", (newMessage) => {
            const isMessageSentFromSelectedUser = newMessage.senderId === selectedUser._id;

            if (!isMessageSentFromSelectedUser) return;

            set({
                messages: [...get().messages, newMessage],
            });
            // if (newMessage.senderId !== authUser._id) {
            //     const audio = new Audio("/notify-sound/notify1.mp3");
            //     audio.play().catch((err) => console.log("Sound play blocked:", err));
            // }
        });

    },

    unsubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
    },

    subscribeToGroupMessages: () => {
        const socket = useAuthStore.getState().socket;
        const authUser = useAuthStore.getState().authUser;
        const { selectedGroup } = get()

        // socket.off("newGroupMessage");

        socket.on("newGroupMessage", (newMessage) => {
            set({
                messages: [...get().messages, newMessage],
            });
            // if (newMessage.senderId !== authUser._id) {
            //     const audio = new Audio("/notify-sound/notify1.mp3");
            //     audio.play().catch((err) => console.log("Sound play blocked:", err));
            // }
        });
    },

    unsubscribeFromGroupMessages: () => {
        const socket = useAuthStore.getState().socket;
        socket.off("newGroupMessage");
    },

    setSelectedUser: (selectedUser) => {
        const socket = useAuthStore.getState().socket;
        const authUser = useAuthStore.getState().authUser;
        const message = useChatStore.getState().messages;
        // console.log(message.length)

        set((state) => {
            const currentSelectedUser = state.selectedUser;

            // Case 1: Deselect (null)
            if (selectedUser == null) {
                // console.log("inactive msg reset");
                socket.emit("inactiveChat", { userId1: authUser._id });
                return { selectedUser: null };
            }

            // Case 2: Selecting a new user (different one)
            if (currentSelectedUser?._id !== selectedUser?._id) {
                // console.log("active msg reset");
                socket.emit("activeChat", { userId1: authUser._id, partnerId: selectedUser._id });
                return { selectedUser };
            }

            // Case 3: Clicking the same user again → do nothing
            console.log("same user clicked — no reset");
            return {};
        });
    },

    setSelectedGroup: (selectedGroup) => {
        const socket = useAuthStore.getState().socket;
        const authUser = useAuthStore.getState().authUser;

        set((state) => {
            const currentSelectedGroup = state.selectedGroup;

            // Case 1: Deselect (null)
            if (selectedGroup == null) {
                socket.emit("inactiveGroupChat", { groupId: currentSelectedGroup?._id, userId: authUser._id });
                return { selectedGroup: null};
            }

            // Case 2: Selecting a new group
            if (currentSelectedGroup?._id !== selectedGroup?._id) {
                socket.emit("activeGroupChat", { groupId: selectedGroup._id, userId: authUser._id });
                return { selectedGroup};
            }

            // Case 3: Clicking same group again → do nothing
            console.log("same group clicked — no reset");
            return {};
        });
    },


}))
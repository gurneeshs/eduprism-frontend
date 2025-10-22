import { create } from "zustand";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { axiosInstance } from "../lib/axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/helper";
import { useChatStore } from "./useChatStore";


export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  socket: null,
  tabs: [],

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      // console.log(res.data);

      set({ authUser: res.data });
      if (res.data.role === "student") {
        set({ tabs: ["Teachers", "Groups"] });
      } else if (res.data.role === "teacher") {
        set({ tabs: ["Students", "Teachers", "Groups"] });
      } else if (res.data.role === "admin") {
        set({ tabs: ["All", "Students", "Teachers", "Groups"] });
      }
      get().connectSocket();
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data, navigate) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      if (res.data.success) {
        set({ authUser: res.data.user });
        if (res.data.user.role === "student") {
          set({ tabs: ["Teachers", "Groups"] });
        } else if (res.data.user.role === "teacher") {
          set({ tabs: ["Students", "Teachers", "Groups"] });
        } else if (res.data.user.role === "admin") {
          set({ tabs: ["All", "Students", "Teachers", "Groups"] });
        }
        toast.success("Account created successfully");
        await get().connectSocket();
        navigate("/Chat", { replace: true });
      }
      else {
        toast.error("Failed to SignUp User");
      }


    } catch (error) {
      toast.error(error.response.data.message);

    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data, navigate) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      // console.log(res.data.user)
      set({ authUser: res.data.user });
      if (res.data.user.role === "student") {
        set({ tabs: ["Teachers", "Groups"] });
      } else if (res.data.user.role === "teacher") {
        set({ tabs: ["Students", "Teachers", "Groups"] });
      } else if (res.data.user.role === "admin") {
        set({ tabs: ["All", "Students", "Teachers", "Groups"] });
      }
      toast.success("Logged in successfully");
      get().connectSocket();
      navigate("/Chat", { replace: true });
    } catch (error) {
      toast.error("Error in login");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async (navigate) => {
    set({ isLoggingOut: true });
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disconnectSocket();
      navigate("/")
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingOut: false })
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("error in update profile:", error);
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  connectSocket: () => {
    const { authUser } = get();

    if (!authUser || get().socket?.connected) return;

    const socket = io(BASE_URL, {
      query: {
        userId: authUser._id,
      },
    });
    socket.connect();

    set({ socket: socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
    socket.off("newGroupMessageSnd");
    socket.off("newMessageSnd");
    socket.off("newMessageSnd1");
    socket.on("newGroupMessageSnd", (newMessage) => {
      const chatStore = useChatStore.getState();
        chatStore.getGroups()
      if (newMessage.senderId !== authUser._id) {
        console.log("beeping");

        const audio = new Audio("/notify-sound/notify1.mp3");
        audio.play().catch((err) => console.log("Sound play blocked:", err));
      }
    });
    socket.on("newMessageSnd1", ()=>{
      const chatStore = useChatStore.getState();
      // const selectedUser = chatStore.selectedUser;
      chatStore.getStudents()
      chatStore.getTeachers()
    })
    socket.on("newMessageSnd", (newMessage) => {
      const chatStore = useChatStore.getState();
      const selectedUser = chatStore.selectedUser;
      chatStore.getStudents()
      chatStore.getTeachers()
      
      if (newMessage.senderId !== authUser._id) {
        console.log("beeping");
        const audio = new Audio("/notify-sound/notify2.mp3");
        audio.play().catch((err) => console.log("Sound play blocked:", err));
      }
    });


  },
  disconnectSocket: () => {
    if (get().socket?.connected) get().socket.disconnect();
  },
}));
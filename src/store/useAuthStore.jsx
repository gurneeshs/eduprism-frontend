import { create } from "zustand";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { axiosInstance } from "../lib/axios";
import { useNavigate } from "react-router-dom";
const BASE_URL1 = "https://eduprism-backend-chat-service.onrender.com"

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  socket: null,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({ authUser: res.data });
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
        toast.success("Account created successfully");
        await get().connectSocket();
        navigate("/User");
      }
      else{
        toast.error("Failed to SignUp User");
      }


    } catch (error) {
      toast.error(error.response.data.message);

    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      // console.log(res.data.user)
      set({ authUser: res.data.user });
      toast.success("Logged in successfully");

      get().connectSocket();
    } catch (error) {
      toast.error("Error in login");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disconnectSocket();
    } catch (error) {
      toast.error(error.response.data.message);
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

    const socket = io(BASE_URL1, {
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
    socket.off("newMessageSnd")
    socket.on("newGroupMessageSnd", (newMessage) => {
      if (newMessage.senderId !== authUser._id) {
        console.log("beeping");

        const audio = new Audio("/notify-sound/notify1.mp3");
        audio.play().catch((err) => console.log("Sound play blocked:", err));
      }
    });
    socket.on("newMessageSnd", (newMessage) => {
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
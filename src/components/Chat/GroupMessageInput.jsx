import { useEffect, useRef, useState } from "react";
// import { useChatStore } from "../store/useChatStore";
import { Image, Send, X, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";

const GroupMessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { authUser, socket } = useAuthStore();
  // console.log(authUser);
  const { sendGroupMessage, isSendingGroupMessage, selectedGroup } = useChatStore();
  // console.log(selectedGroup)
  const [isChatAllowed, setIsChatAllowed] = useState(selectedGroup.isChatAllowed ?? true);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendGroupMessage({
        text: text.trim(),
        image: imagePreview,
      });

      // Clear form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  if (!isChatAllowed && (authUser._id.toString() != selectedGroup.admin.toString()) && (authUser.role=="student"))
    return (
      <div className="p-3 px-5 w-full bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500 gap-2">
        {/* <Lock size={18} className="text-gray-500" /> */}
        <span>Chat is disabled by the admin</span>
      </div>
    );


  return (
    <div className="p-3 px-5 w-full bg-gray-100 rounded-2xl">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
              <X className="size-3" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            className="w-full input-sm focus:outline-none focus:ring-0 sm:input-md"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`hidden sm:flex btn btn-circle hover:text-green-700 cursor-pointer
                     ${imagePreview ? "text-emerald-500" : "text-green-500"}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={24} />
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-sm btn-circle text-blue-500 hover:text-blue-700 cursor-pointer p-1.5"
          disabled={(!text.trim() && !imagePreview) || isSendingGroupMessage}
        >

          {isSendingGroupMessage ? (<Loader2 className="w-6 h-6 animate-spin" />) : (<Send size={24} />)}
        </button>
      </form>
    </div>
  );
};
export default GroupMessageInput;
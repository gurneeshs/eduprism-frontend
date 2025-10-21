import { X } from "lucide-react";
import { useChatStore } from "../../store/useChatStore";
import GroupInfo from "./GroupInfo";
import { useState } from "react";

const GroupHeader = () => {
  const { selectedGroup, setSelectedGroup, closeChat } = useChatStore();
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="p-3 px-5 border-b border-gray-300 bg-gray-50">
      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setShowInfo(true)}
        >
          {/* Group Avatar */}
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
            {selectedGroup?.name?.[0]?.toUpperCase()}
          </div>

          {/* Group Name */}
          <div className="flex flex-col">
            <h3 className="font-medium text-lg leading-tight">
              {selectedGroup?.name}
            </h3>
            <p className="text-sm text-gray-500">
              {selectedGroup?.members?.length || 0} members
            </p>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => {
            setSelectedGroup(null)
            closeChat();
          }}
          className="text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>
      </div>
      {showInfo && (
        <GroupInfo group={selectedGroup} onClose={() => setShowInfo(false)} />
      )}
    </div>
  );
};

export default GroupHeader;
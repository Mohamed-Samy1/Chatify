import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-[#355E3B]" : "bg-[#A67B5B]";
  const textColor = fromMe ? "text-white" : "text-[#F8F1E5]";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-12 h-12 rounded-full border border-[#A67B5B]">
          <img alt="User Avatar" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble ${bubbleBgColor} ${textColor} ${shakeClass} pb-2 text-sm`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-60 text-xs text-[#A67B5B] mt-1">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;

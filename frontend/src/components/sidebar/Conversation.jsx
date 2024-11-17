import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-4 items-center p-4 rounded-lg cursor-pointer transition 
        ${isSelected ? "bg-[#ffffff] border border-[#3c9a4a]" : "bg-[#ffffff]"}
        hover:bg-[#3c9a4a]`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-14 rounded-full border border-[#eaba68] overflow-hidden">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between items-center">
            <p className="font-medium text-[#000000]">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="h-[1px] bg-[#3c9a4a] mx-4 my-2" />}
    </>
  );
};
export default Conversation;

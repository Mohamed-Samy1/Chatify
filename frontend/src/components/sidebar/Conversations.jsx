import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="flex flex-col gap-3 py-2 overflow-auto bg-[#ffffff]">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading && <span className="loading loading-spinner mx-auto mt-4 text-[#355E3B]"></span>}
    </div>
  );
};
export default Conversations;

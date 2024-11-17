import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 p-2">
      <input
        type="text"
        placeholder="Search…"
        className="w-full px-4 py-2 border rounded-full bg-[#F4F2EE] text-[#355E3B] focus:border-[#355E3B] focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 bg-[#355E3B] rounded-full text-white hover:bg-[#2C4A34] transition"
      >
        <IoSearchSharp className="w-6 h-6" />
      </button>
    </form>
  );
};
export default SearchInput;

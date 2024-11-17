import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-[#355E3B] flex flex-col gap-4 p-4 bg-[#ffffff] h-full">
      <SearchInput />
      <div className="h-[1px] bg-[#355E3B]" />
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;

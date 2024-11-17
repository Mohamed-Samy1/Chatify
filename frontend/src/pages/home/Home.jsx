import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-[#F8F1E5] shadow-lg border border-[#A67B5B]">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;

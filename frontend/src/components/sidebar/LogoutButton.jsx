import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto flex justify-center">
      {!loading ? (
        <BiLogOut
          className="w-8 h-8 text-[#942626] hover:text-[#c72828] transition-colors cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner text-[#A67B5B]"></span>
      )}
    </div>
  );
};
export default LogoutButton;

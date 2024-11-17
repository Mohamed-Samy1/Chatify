import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#F8F1E5]">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-md w-full text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src="/wechat_chat_logo.png" alt="ChatApp Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold text-[#355E3B] font-serif">
            Chatify
          </h1>
        </div>
        <p className="text-lg text-[#A67B5B] font-sans mb-4">
          Welcome back! Please log in to continue.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-left text-[#A67B5B] text-sm">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full p-3 rounded-lg border border-[#A67B5B] bg-[#F4F2EE] text-[#355E3B] focus:border-[#355E3B] focus:ring focus:ring-green-200 outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-left text-[#A67B5B] text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 rounded-lg border border-[#A67B5B] bg-[#F4F2EE] text-[#355E3B] focus:border-[#355E3B] focus:ring focus:ring-green-200 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#355E3B] text-white hover:bg-[#2C4A34] hover:shadow-md transition"
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>
        </form>
        <Link
          to="/signup"
          className="block mt-4 text-sm text-[#355E3B] hover:text-[#2C4A34] hover:underline"
        >
          {"Don't"} have an account?
        </Link>
      </div>
    </div>
  );
};

export default Login;

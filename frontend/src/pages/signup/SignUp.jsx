import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#F8F1E5]">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-[#355E3B] mb-6 flex items-center justify-center gap-2">
          <img src="/wechat_chat_logo.png" alt="ChatApp Logo" className="w-10 h-10" />
          Sign Up to <span className="text-[#2C4A34]">Chatify</span>
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#A67B5B] mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-3 rounded-lg border border-[#A67B5B] bg-[#F4F2EE] text-[#355E3B] focus:border-[#355E3B] focus:ring focus:ring-green-200 outline-none"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm text-[#A67B5B] mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter Unique Username"
              className="w-full p-3 rounded-lg border border-[#A67B5B] bg-[#F4F2EE] text-[#355E3B] focus:border-[#355E3B] focus:ring focus:ring-green-200 outline-none"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm text-[#A67B5B] mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 rounded-lg border border-[#A67B5B] bg-[#F4F2EE] text-[#355E3B] focus:border-[#355E3B] focus:ring focus:ring-green-200 outline-none"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm text-[#A67B5B] mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg border border-[#A67B5B] bg-[#F4F2EE] text-[#355E3B] focus:border-[#355E3B] focus:ring focus:ring-green-200 outline-none"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="block mt-4 text-sm text-[#355E3B] hover:text-[#2C4A34] hover:underline"
          >
            Already have an account?
          </Link>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#355E3B] text-white hover:bg-[#2C4A34] hover:shadow-md transition mt-4"
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

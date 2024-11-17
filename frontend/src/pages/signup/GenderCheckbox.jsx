const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-4 mt-4">
      <div className="form-control">
        <label
          className={`flex items-center gap-2 cursor-pointer ${
            selectedGender === "male" ? "text-[#355E3B] font-semibold" : "text-[#A67B5B]"
          }`}
        >
          <span>Male</span>
          <input
            type="checkbox"
            className="checkbox border-[#A67B5B] focus:ring focus:ring-green-200"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`flex items-center gap-2 cursor-pointer ${
            selectedGender === "female" ? "text-[#355E3B] font-semibold" : "text-[#A67B5B]"
          }`}
        >
          <span>Female</span>
          <input
            type="checkbox"
            className="checkbox border-[#A67B5B] focus:ring focus:ring-green-200"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;

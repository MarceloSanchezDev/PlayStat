import React from "react";

const InputForm = ({ type, id, onChange, placeholder }) => {
  return (
    <input
      onChange={onChange}
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-100 h-10 p-3 border rounded-2xl bg-white shadow border-gray-100"
    />
  );
};

export default InputForm;

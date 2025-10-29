import React from "react";

const LabelForm = ({ children, title, htmlFor }) => {
  return (
    <label
      className="w-100 flex flex-wrap gap-2 text-gray-900 font-bold"
      htmlFor={htmlFor}
    >
      {title}
      {children}
    </label>
  );
};

export default LabelForm;

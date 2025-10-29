import React from "react";

const TitleFom = ({ title }) => {
  return (
    <h1 className="text-center mb-3 text-4xl md:text-6xl font-bold max-w-4xl leading-tight text-shadow-lg/20">
      {title}
    </h1>
  );
};

export default TitleFom;

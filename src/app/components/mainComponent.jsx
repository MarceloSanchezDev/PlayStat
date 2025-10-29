import React from "react";

const MainComponent = ({ children }) => {
  return (
    <main className="flex flex-col justify-top items-center content-center wh-100 min-h-screen bg-gray-50 text-gray-900">
      {children}
    </main>
  );
};

export default MainComponent;

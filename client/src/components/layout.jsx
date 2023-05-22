import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex">
      <div className="sm:invisible md:visible md:w-2/4 bg-blue-400">
        <img
        className=""
          src="/bg.svg"
          alt=""
        />
      </div>
      <div className="w-full md:w-2/4 bg-blue-400">{children}</div>
    </div>
  );
};

export default Layout;

import React from "react";

function Navbar() {
  return (
    <div className="max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 shadow-lg h-16 fixed">
      <div className="flex justify-center items-center h-full">
        <h1 className="text-2xl cursor-pointer font-bold">
          Word<span className="text-3xl text-cyan-500">To</span>PDF
        </h1>
      </div>
    </div>
  );
}

export default Navbar;

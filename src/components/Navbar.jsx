import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black text-white py-3 px-12 flex justify-between items-center font-bold">
      <h1 className="text-xl">Logo</h1>
      <ul className="flex items-center gap-8 text-lg font-semibold">
        <li>Home</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  
  return (
    <div className="bg-black text-white py-3 px-12 flex justify-between items-center font-bold">
      <h1 className="text-xl">Logo</h1>
      
      <ul className="flex items-center gap-8 text-lg font-semibold">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/cart"}>Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

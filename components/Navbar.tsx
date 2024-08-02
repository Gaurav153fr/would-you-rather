import React from "react";
import Link from "next/link";
import Login from "./Login";
const Navbar = () => {
  return (
    <div className=" w-full flex justify-between bg-black/70 items-center px-5">
      <Link href="/" className="text-white font-extrabold text-pretty text-2xl flex flex-col">
        <div className="w-14"><img src="logo.png" alt="logo" /></div>
      </Link>
      <Login />
    </div>
  );
};

export default Navbar;

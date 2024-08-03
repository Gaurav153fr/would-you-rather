import React from "react";
import Link from "next/link";
import Login from "./Login";
const Navbar = () => {
  return (
    <div className=" w-full flex justify-between md:backdrop-blur-sm bg-black/80 items-center md:px-5">
      <Link href="/" className="text-white font-extrabold text-pretty md:text-2xl flex flex-col">
        <div className="w-14"><img src="logo.png" alt="logo" /></div>
      </Link>
      <Login />
    </div>
  );
};

export default Navbar;

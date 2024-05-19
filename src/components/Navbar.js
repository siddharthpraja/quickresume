import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-teal-400  rounded-3xl mt-5 py-3 items-center ">
      <div className="mx-4 md:mx-8 flex items-center justify-between">
        <h2 className="text-gray-50 font-sans lg:text-4xl md:text-3xl text-xl font-bold">Quick Resume</h2>
        <Link href={"/reume/add"} className="text-gray-950 hover:text-fuchsia-50 hover:scale-105">Create Now</Link>
      </div>
    </div>
  );
};

export default Navbar;

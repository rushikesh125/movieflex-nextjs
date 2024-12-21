import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "./svgs/SearchIcon";
const Navbar = () => {
  return (
    <div className="flex bg-black px-2 py-4 justify-between  ">
      <Link href="/">
        <Image src={"/images/logo.png"} alt="logo" width={150} height={70} />
      </Link>
      <div className="  flex p-1">
        <Link href="/" className="mx-5  hover:text-green-500">
          
        </Link>
        <Link href="/search" className="me-5">
          <SearchIcon/>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

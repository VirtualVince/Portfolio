import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 bg-[#ffffff] z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <ul>
          <li1 className="ml-10 text-sm uppercaase hover:border-b">
            <Link href="/"> Home </Link>
          </li1>
          <li2 className="ml-10 text-sm uppercaase hover:border-b">
            <Link href="/#about"> About </Link>
          </li2>
          <li3 className="ml-10 text-sm uppercaase hover:border-b">
            <Link href="/#skills"> Skills </Link>
          </li3>
          <li4 className="ml-10 text-sm uppercaase hover:border-b">
            <Link href="/#projects"> Projects </Link>
          </li4>
          <li5 className="ml-10 text-sm uppercaase hover:border-b">
            <Link href="/#contact"> Contact </Link>
          </li5>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

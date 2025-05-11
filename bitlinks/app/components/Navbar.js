import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-purple-800 text-white px-20 h-[100px]">
      <div className="text-3xl font-bold">BitLinks</div>
      <div className="flex items-center gap-22">
        <ul className="flex justify-center items-center gap-10 text-lg font-semibold">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/shorten">
            <li>Shorten</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <div className="flex items-center gap-4">
          <Link href="/shorten">
            <button className="btn">Try now</button>
          </Link>
          <Link href="https://github.com/UbaidBinWaris">
            <button className="btn">Github</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

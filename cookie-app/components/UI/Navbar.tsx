import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-sky-900 text-white dark:bg-white py-2 dark:text-white flex justify-between items-center px-[10vw]">
      <Link href="/">
        <div className="bg-white text-slate-900 p-2 px-5 rounded-full">
          Cookie app 🍪
        </div>
      </Link>
      <ul className="flex gap-5">
        <Link href="/theme-changer">Theme changer</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import Link from "next/link";
import Logo from "./logo";
const Navbar = () => {
  return (
      <div className="w-full h-full sticky top-0 bg-white dark:bg-slate-800  z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
          <button className="hamburger hamburger--spin" type="button"
              aria-label="Menu" aria-controls="navigation">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <Logo/>
            <ul className="hidden md:flex gap-x-6 text-black dark:text-white">
              <li>
                <Link href="/about">
                  <p className="dark:text-white">About</p>
                </Link>
              </li>
              <li>
                <Link href="/resume">
                  <p className="dark:text-white">Resume</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="dark:text-white">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
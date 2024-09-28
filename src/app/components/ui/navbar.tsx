import React from "react";
import Link from "next/link";
import Logo from "./logo";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
      <div className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
          <Logo/>
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link href="/resume">
                  <p>Resume</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathName = usePathname();
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="px-16 py-2 flex items-center justify-between ">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center overflow-hidden  rounded-full   cursor-pointer ">
              <Image
                src="/assests/Loogos/transperant_logo.png"
                alt="Logo"
                className="scale-[1.4]"
                width={80}
                height={80}
                priority
              />
            </div>
            <h2 className="text-xl font-bold uppercase">SnapShield</h2>
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 font-semibold ">
            <li>
              <Link href="/" passHref>
                <span
                  className={`${
                    pathName === "/" ? "text-black" : "text-black/50"
                  } cursor-pointer transition-all duration-300 hover:text-black`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <span
                  className={`${
                    pathName === "/about" ? "text-black" : "text-black/50"
                  } cursor-pointer transition-all duration-300 hover:text-black`}
                >
                  {" "}
                  About
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

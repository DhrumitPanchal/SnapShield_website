"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { MdDownload } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero: React.FC = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    document?.addEventListener("mousemove", (e) => {
      const x = Math.min(e.clientX - 200, window.innerWidth - 220); // Prevents overflow
      const y = e.clientY - 30;

      gsap.to(cursor, {
        x,
        y,
        duration: 1.5,
        display: "block",
        ease: "back.out(4)",
      });
    });

    return () => {
      document?.removeEventListener("mousemove", () => {});
    };
  }, []);
  return (
    <section className="px-40 max-sm:px-2 text-center overflow-x-hidden ">
      <div
        id="cursor"
        className="absolute h-6 w-6 hidden max-sm:opacity-0 bg-black rounded-full"
      />
      <h1 className="text-3xl pt-44 md:text-6xl font-bold mb-8 drop-shadow-lg">
        Download & Stay Secure
      </h1>
      <p className="text-lg md:text-2xl mb-16 drop-shadow-md w-2/3 max-sm:w-full mx-auto">
        Experience a secure and controlled environment for testing, analyzing,
        and running applications safely. Download the Snapshield App today and
        take control of your digital security.
      </p>
      <button className="px-6 py-3 flex items-center mx-auto gap-4 rounded-md bg-gradient-to-r bg-black hover:bg-black/80 transition-colors duration-150 text-white font-semibold shadow-lg ">
        <MdDownload className="text-2xl" />
        <h2> Download</h2>
      </button>
    </section>
  );
};

export default Hero;

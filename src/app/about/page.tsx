"use client";
import React, { useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const AboutPage = () => {
  useEffect(() => {
    const box = document.getElementById("box");
    const cursor = document.getElementById("cursor");

    document?.addEventListener("mousemove", (e) => {
      const x = Math.min(e.clientX - 100, window.innerWidth - 120); // Prevents overflow
      const y = e.clientY - 30;
      gsap.to(cursor, {
        x: e.x - 100,
        y: e.y - 30,
        duration: 1.5,
        display: "block",
        ease: "back.out(4)",
      });
    });

    box?.addEventListener("mousemove", (e) => {
      const x = Math.min(e.clientX - 100, window.innerWidth - 120); // Prevents overflow
      const y = e.clientY - 30;
      gsap.to(cursor, {
        x: e.x - 100,
        y: e.y - 30,
        display: "block",
        ease: "back.out(4)",
      });
    });

    box?.addEventListener("mouseenter", (e) => {
      const x = Math.min(e.clientX - 100, window.innerWidth - 120); // Prevents overflow
      const y = e.clientY - 30;
      gsap.to(cursor, {
        background: "white",
        scale: 1.5,
        duration: 0.1,
      });
    });

    box?.addEventListener("mouseleave", (e) => {
      const x = Math.min(e.clientX - 100, window.innerWidth - 120); // Prevents overflow
      const y = e.clientY - 30;
      gsap.to(cursor, {
        background: "black",
        scale: 1,
        duration: 0.1,
      });
    });

    return () => {
      box?.removeEventListener("mousemove", () => {});
      box?.removeEventListener("mouseenter", () => {});
      box?.removeEventListener("mouseleave", () => {});
      document?.removeEventListener("mousemove", () => {});
    };
  }, []);
  return (
    <Layout>
      <main className="px-16 flex  flex-col ">
        <div
          id="cursor"
          className="absolute h-6 w-6 hidden bg-black rounded-full"
        />
        <div
          id="box"
          className="mt-20 flex items-center pl-20 h-30 bg-black text-white p-8 rounded-lg"
        >
          <h1 className="text-5xl pb-2 font-bold ">About SNAPSHIELD</h1>
        </div>
        <div className="flex flex-col   justify-between gap-8 mt-10 w-full">
          <div className="flex  gap-20">
            <div className="flex flex-col gap-2 w-1/2">
              <h2 className="text-2xl font-semibold">
                Secure. Isolated. Reliable.
              </h2>
              <p>
                The Sandbox App is designed to provide a safe, controlled
                environment for running and testing applications without
                exposing your system to potential threats. Whether you're a
                developer, security analyst, or just someone who values digital
                safety, our app ensures you can experiment freely without risks.
              </p>
            </div>

            <div className="flex flex-col gap-2 w-1/2">
              <h2 className="text-2xl font-semibold">Our Mission</h2>
              <p>
                Our goal is to empower users with a secure sandboxing solution
                that isolates applications, detects threats in real time, and
                enhances cybersecurity. We believe in safety, performance, and
                ease of use—helping individuals and businesses test software in
                a controlled digital space.
              </p>
            </div>
          </div>

          <div className="flex gap-20 w-full">
            <div className="flex flex-col gap-2 w-1/2">
              <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
              <div className="flex flex-col gap-1">
                <li>
                  <span className="font-semibold">Enhanced Security:</span> Run
                  applications in isolation to prevent malware, viruses, or data
                  leaks.
                </li>
                <li>
                  <span className="font-semibold">
                    Real-time Threat Analysis:
                  </span>{" "}
                  Detect suspicious behavior and ensure safe execution.
                </li>
                <li>
                  <span className="font-semibold">Seamless Performance:</span>{" "}
                  Lightweight and optimized for minimal resource usage.
                </li>
                <li>
                  <span className="font-semibold">
                    User-Friendly Interface:
                  </span>{" "}
                  Designed for both beginners and professionals.
                </li>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-1/2">
              <h2 className="text-2xl font-semibold">Our Commitment</h2>
              <p>
                {" "}
                We continuously innovate to provide the best sandboxing
                experience. Your security is our top priority, and we strive to
                stay ahead in digital protection.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AboutPage;

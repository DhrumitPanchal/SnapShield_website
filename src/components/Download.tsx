"use client";

import React from "react";
import { MdDownload } from "react-icons/md";

function Download() {
  const handleDownload = () => {
    const url =
      "https://media.githubusercontent.com/media/DhrumitPanchal/SnapShield_website/main/public/SnapShield.apk";
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "SnapShield.apk";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <button
      onClick={() => handleDownload()}
      className="px-6 py-3 flex items-center mx-auto gap-4 rounded-md bg-gradient-to-r bg-black hover:bg-black/80 transition-colors duration-150 text-white font-semibold shadow-lg "
    >
      <MdDownload className="text-2xl" />
      <h2> Download</h2>
    </button>
  );
}

export default Download;

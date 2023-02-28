import React, { useState } from "react";
import { GoDesktopDownload } from "react-icons/go";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import { saveAs } from "file-saver";

const Layout = ({ children, setDark, dark, userInput, bigText }) => {
  const handleSaveFile = () => {
    const blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `${bigText}.txt`);
  };

  return (
    <div
      className={` relative w-screen h-screen transition-all duration-1000 flex ${
        dark && `bg-dark text-white`
      }`}
    >
      <div className="fixed w-fit flex flex-col justify-between py-20 h-full pl-5 text-2xl">
        <div onClick={handleSaveFile} download={`${bigText}.txt`}>
          <GoDesktopDownload />
        </div>
        <div onClick={() => setDark((prev) => !prev)}>
          {dark ? <BsFillSunFill /> : <MdDarkMode />}
        </div>
      </div>
      <div className={` border border-white h-screen w-screen`}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;

import React, { useState, useEffect } from "react";
import { Menu } from "shared/ui/header/menu";
import { Search } from "shared/ui/header/search";
import { LowVisionMode } from "shared/ui/header/lowVisionMode";
import { ChangeLanguage } from "shared/ui/header/changeLanguage";
import logo from "shared/icons/header/logo.png";
import "./style.css";

const HeaderWidget: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1536);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1536);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full custom-border z-10 2xl:overflow-hidden px-3">
      <div className="max-w-[1502px] w-full mx-auto pb-12 pt-[45px] flex flex-col gap-3">
        <div className="pb-1 flex justify-between items-center">
          <img
            src={logo}
            alt="Logo"
            className={`w-[68px] h-[64px] ${isLargeScreen ? "" : "hidden"}`}
          />
          <div className="w-full 2xl:w flex flex-row 2xl:flex-col gap-4 pt-[3px]">
            <Menu />
            <div className="flex flex-row justify-end items-center gap-3 md:gap-[72px]">
              <div className="flex gap-[14px]">
                <Search />
                <LowVisionMode />
              </div>
              <ChangeLanguage />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className={`w-[68px] h-[64px] ${!isLargeScreen ? "" : "hidden"}`}
          />
          <div className="text-[30.5px] md:text-[41.07px] pt-[2px] font-semibold text-[#36BE26]">
            НАЗВАНИЕ ОРГАНИЗАЦИИ
          </div>
        </div>
      </div>
    </header>
  );
};

export { HeaderWidget };

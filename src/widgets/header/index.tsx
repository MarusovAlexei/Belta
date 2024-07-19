import React from "react";
import { Menu } from "shared/ui/header/menu";
import { Seaarch } from "shared/ui/header/search";
import { LowVisionMode } from "shared/ui/header/lowVisionMode";
import { ChangeLanguage } from "shared/ui/header/changeLanguage";
import logo from "shared/icons/header/logo.png";
import "./style.css";

const HeaderWidget: React.FC = () => {
  return (
    <header className=" max-w-[1502px] w-full mx-auto py-12 px-4">
      <div className="pb-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-17 h-16" />
        <div className="flex flex-col gap-4">
          <Menu />
          <div className="flex flex-row justify-end gap-[72px]">
            <div className="flex gap-[14px]">
              <Seaarch />
              <LowVisionMode />
            </div>
            <ChangeLanguage />
          </div>
        </div>
      </div>
      <div className="text-[41.07px] font-semibold py-2 text-[#36BE26]">
        НАЗВАНИЕ ОРГАНИЗАЦИИ
      </div>
    </header>
  );
};

export { HeaderWidget };

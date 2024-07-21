import React from "react";
import { Menu } from "shared/ui/header/menu";
import { Seaarch } from "shared/ui/header/search";
import { LowVisionMode } from "shared/ui/header/lowVisionMode";
import { ChangeLanguage } from "shared/ui/header/changeLanguage";
import logo from "shared/icons/header/logo.png";
import "./style.css";

const HeaderWidget: React.FC = () => {
  return (
    <header className="w-full custom-border z-10">
     {/*  <div className="max-w-[1502px] w-full mx-auto pb-12 pt-[45px]">
        <div className="pb-1 flex justify-between items-center">
          <img src={logo} alt="Logo" className="min-w-[68px] min-h-[64px]" />
          <div className="flex flex-col gap-4 pt-[3px]">
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
        <div className="text-[41.07px] pt-[2px] font-semibold text-[#36BE26]">
          НАЗВАНИЕ ОРГАНИЗАЦИИ
        </div>
      </div> */}
    </header>
  );
};

export { HeaderWidget };

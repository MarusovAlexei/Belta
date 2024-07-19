import React, { FC } from "react";
import { IMainLayout } from "./types";

const MainLayout: FC<IMainLayout> = ({ header, children }) => {
  return (
    <div className={"w-full min-h-[100vh] box-border flex"}>
      <div className={"flex flex-col justify-between w-full h-full"}>
        {header} {children}
      </div>
    </div>
  );
};

export { MainLayout };

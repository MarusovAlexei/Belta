import React from "react";
import search from "shared/icons/header/search.png";

const Search = () => {
  return (
    <div className="h-[37.76px] w-[157px] flex flex-row">
      <input type="text" className=" w-[121px] pl-4 py-1 bg-[#F2F2F2]" />
      <div
        className="bg-[#36BE26] p-[5px] w-[36.77px] cursor-pointer"
        onClick={() => alert(`Ищу`)}
      >
        <img src={search} alt="search" />
      </div>
    </div>
  );
};

export { Search };

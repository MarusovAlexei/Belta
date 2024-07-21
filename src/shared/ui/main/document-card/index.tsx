import React, { FC } from "react";

interface DocumentCard {
  title: string;
  subTitle?: string;
  img: string;
}

const DocumentCard: FC<DocumentCard> = ({ title, subTitle, img }) => {
  return (
    <div className="w-[358px] h-[267px] bg-[#F1F1EE] relative p-[12px] my-10 mx-auto">
      <div className="w-full h-full border-[2px] borber-[#B5C9A7] flex flex-col items-center justify-center">
        <div className="pt-62px text-[21px] font-semibold text-center">
          {title}
        </div>
        {subTitle && (
          <div className="text-[15px] font-semibold">{subTitle}</div>
        )}
        <div className="absolute -top-[33px] w-[81px] h-[65px] bg-white shadow-md flex items-center justify-center">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export { DocumentCard };

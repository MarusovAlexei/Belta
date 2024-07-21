import React, { FC } from "react";

interface ProductCardProps {
  img: string;
  title: string;
  overlay: string;
}

const ProductCard: FC<ProductCardProps> = ({ img, title, overlay }) => {
  return (
    <div className="lg:w-[300px] lg:h-[490px] sm:w-[247.66px] sm:h-[247.66px] w-[364px] h-[248px] relative flex items-center justify-center p-2">
      <img
        src={img}
        alt="img"
        className="absolute w-full h-full object-cover z-0"
      />
      <div
        style={{ backgroundColor: overlay }}
        className="absolute w-full h-full z-10 opacity-41"
      ></div>
      <div className="absolute lg:bottom-[50px]  sm:bottom-[30px] bottom-[25px] z-20 text-start sm:text-center text-[19.49px] font-bold text-white pl-7 sm:pl-0 w-full">
        {title}
      </div>
    </div>
  );
};

export { ProductCard };

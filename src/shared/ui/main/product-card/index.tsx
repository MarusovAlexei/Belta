import React, { FC } from "react";

interface ProductCardProps {
  img: string;
  title: string;
  overlay: string;
}

const ProductCard: FC<ProductCardProps> = ({ img, title, overlay }) => {
  return (
    <div className="w-[300px] h-[490px] relative flex items-center justify-center p-2">
      <img
        src={img}
        alt="img"
        className="absolute w-full h-full object-cover z-0"
      />
      <div
        style={{ backgroundColor: overlay }}
        className="absolute w-full h-full z-10 opacity-41"
      ></div>
      <div className="absolute bottom-[50px] z-20 text-center text-[19.49px] font-bold text-white">
        {title}
      </div>
    </div>
  );
};

export { ProductCard };

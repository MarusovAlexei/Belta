import React, { useState, useEffect } from "react";
import { ProductCard } from "shared/ui/main/product-card";
import first from "shared/icons/products/1.png";
import second from "shared/icons/products/2.png";
import third from "shared/icons/products/3.png";
import fourth from "shared/icons/products/4.png";
import fifth from "shared/icons/products/5.png";

const products = [
  { img: first, title: "Щебёночные материалы" },
  { img: second, title: "Песок" },
  { img: third, title: "Асфальтобетон" },
  { img: fourth, title: "Плитка тротуарная, бордюр" },
  { img: fifth, title: "ЖБИ, цементные растворы, фундаменты" },
  { img: first, title: "Щебёночные материалы" },
  { img: second, title: "Песок" },
  { img: third, title: "Асфальтобетон" },
  { img: fourth, title: "Плитка тротуарная, бордюр" },
  { img: fifth, title: "ЖБИ, цементные растворы, фундаменты" },
];

const overlayColors = ["rgba(82, 204, 46, 0.41)", "rgba(246, 232, 177, 0.41)"];

const Products = () => {
  const [showAll, setShowAll] = useState(false);
  const [numDisplayedProducts, setNumDisplayedProducts] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1540) {
        setNumDisplayedProducts(5);
      } else if (window.innerWidth >= 1024) {
        setNumDisplayedProducts(8);
      } else if (window.innerWidth >= 800) {
        setNumDisplayedProducts(6);
      } else {
        setNumDisplayedProducts(2);
      }
    };

    handleResize(); // Set initial number of displayed products
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const displayedProducts = showAll
    ? products
    : products.slice(0, numDisplayedProducts);

  return (
    <div className="max-w-[1526px] w-full mx-auto p-3">
      <div className="text-[21.01px] text-[#36BE26] font-semibold mb-[35px]">
        ПРОДУКЦИЯ
      </div>
      <div className="flex flex-wrap justify-center">
        {displayedProducts.map((product, index) => (
          <ProductCard
            key={index}
            img={product.img}
            overlay={overlayColors[index % overlayColors.length]}
            title={product.title}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleToggle}
          className="w-[295px] h-[52px] text-white text-[18.14px] font-semibold"
          style={{ backgroundColor: showAll ? "#667760" : "#509D31" }}
        >
          {showAll ? "СВЕРНУТЬ" : "ПОСМОТРЕТЬ ВСЕ"}
        </button>
      </div>
    </div>
  );
};

export { Products };

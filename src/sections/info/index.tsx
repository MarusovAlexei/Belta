import React, { useState, useEffect } from "react";
import fon1 from "shared/icons/info/fon1.png";
import fon2 from "shared/icons/info/fon2.png";
import fon3 from "shared/icons/info/fon3.png";
import close from "shared/icons/info/close.png";

const images = [fon1, fon2, fon3];
const texts = [
  {
    title:
      "МЫ КРУПНЕЙШЕЕ ДОРОЖНОЕ ПРЕДПРИЯТИЕ, РАБОТАЮЩЕЕ НА АВТОМОБИЛЬНЫХ ДОРОГАХ, УЛИЦАХ ГОРОДОВ И МАЛЫХ НАСЕЛЁННЫХ ПУНКТОВ",
    subtitle: "НАШИ ДОРОГИ - ВАШЕ СПОКОЙСТВИЕ!",
  },
  {
    title:
      "МЫ СТРОИМ ДОРОГИ, КОТОРЫЕ СОЕДИНЯЮТ ГОРОДА И УЛУЧШАЮТ КАЧЕСТВО ЖИЗНИ",
    subtitle: "БЕЗОПАСНОСТЬ И КОМФОРТ НА ДОРОГАХ - НАША ОСНОВНАЯ ЦЕЛЬ!",
  },
  {
    title:
      "НАШ ОПЫТ И ТЕХНОЛОГИИ ПОЗВОЛЯЮТ СОЗДАВАТЬ ДОРОГИ ВЫСОЧАЙШЕГО КАЧЕСТВА",
    subtitle: "ДОВЕРЯЙТЕ ПРОФЕССИОНАЛАМ - ВЫБИРАЙТЕ НАС!",
  },
];

const titleForSlides = [
  "Мы крупнейшее дорожное предприятие",
  "Мы строим дороги",
  "Наш опыт и технологии",
];

const InfoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [vision, setVision] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:mt-[-70px] relative h-[520px] md:h-[583px] overflow-hidden">
      {vision && (
        <div className=" md:hidden w-full h-[177px] bg-[#F1F1EE]">
          <div
            className="w-full max-w-[368px] mx-auto p-[7px] flex justify-end cursor-pointer"
            onClick={() => setVision(false)}
          >
            <img src={close} alt="close" />
          </div>
          <div className="w-full max-w-[358px] flex flex-col items-start justify-center mx-auto">
            {titleForSlides.map((label, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer py-2 text-[17.36] border-b-4  w-full ${
                  activeIndex === index ? "font-bold" : ""
                } ${
                  activeIndex === index
                    ? "border-[#F1F1EE]"
                    : "border-[#BCE99B]"
                }`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      )}
      <div>
        <img
          src={images[activeIndex]}
          alt="background"
          className="absolute -z-10 w-full h-full object-cover transition-opacity duration-500"
        />
        <div className="w-full max-w-[358px] lg:max-w-[759px] 2xl:max-w-[1502px] min-h-[583px] mx-auto pt-[66px] md:pt-[149px] pb-[81px] flex justify-between relative z-10">
          <div className="flex flex-col gap-[51px] md:gap-[101px] text-white">
            <div className="text-[15.86px] lg:text-[18.53px] xl:text-[23.52px] font-semibold max-w-[1120px]">
              {texts[activeIndex].title}
            </div>
            <div className="text-[18.55px] lg:text-[21.45px] xl:text-[27.24px] font-extrabold max-w-[1120px]">
              {texts[activeIndex].subtitle}
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-end">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`hidden md:flex w-[26px] h-[26px] items-center justify-center p-[1px] ${
                  activeIndex === index ? "border border-[#8AE54D]" : ""
                }`}
              >
                <div className="w-[18px] h-[18px] bg-[#FFFFFF] hover:bg-[#43FF00] transition-colors cursor-pointer"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { InfoSection };

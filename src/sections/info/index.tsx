import React, { useState, useEffect } from "react";
import fon1 from "shared/icons/info/fon1.png";
import fon2 from "shared/icons/info/fon2.png";
import fon3 from "shared/icons/info/fon3.png";

const images = [fon1, fon2, fon3];

const InfoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-[-70px] relative max-h-[583px] overflow-hidden">
      <img
        src={images[activeIndex]}
        alt="background"
        className="absolute -z-10 w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="max-w-[1502px] w-full min-h-[583px] mx-auto pt-[149px] pb-[81px] flex justify-between relative z-10">
        <div className="flex flex-col gap-[101px] text-white">
          <div className="text-[23.52px] font-semibold max-w-[1120px]">
            Мы крупнейшее дорожное предприятие, работающее на автомобильных
            дорогах, улицах городов и малых населённых пунктов
          </div>
          <div className="text-[27.24px] font-extrabold max-w-[1120px]">
            Наши дороги - Ваше спокойствие!
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-end">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-[26px] h-[26px] flex items-center justify-center  p-[1px] ${
                activeIndex === index ? "border border-[#8AE54D]" : ""
              }`}
            >
              <div className="w-[18px] h-[18px] bg-[#FFFFFF] hover:bg-[#43FF00] transition-colors cursor-pointer"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { InfoSection };

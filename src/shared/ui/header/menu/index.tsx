import React, { useState, useEffect } from "react";
import "./style.css";

const BurgerOpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 41 30"
    width="41"
    height="30"
    className="burger-icon"
  >
    <path
      d="M0 3h41"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M0 12h41"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M0 21h41"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

const BurgerCloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    className="burger-icon"
  >
    <path
      d="M6 18L18 6M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Menu = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1536);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = [
    "О ПРЕДПРИЯТИИ",
    "ФИЛИАЛЫ",
    "УСЛУГИ",
    "ОБРАЩЕНИЯ ГРАЖДАН",
    "ВЛАДЕЛЬЦУ ТКТС",
    "ПАРОМНЫЕ ПЕРЕПРАВЫ",
    "НОРМАТИВНЫЕ АКТЫ",
    "КОНТАКТЫ",
  ];

  const itemLinks = ["Пункт 1", "Пункт 2", "Пункт 3", "Пункт 4"];

  return (
    <nav>
      {isMobile ? (
        <div className="relative">
          <button
            onClick={() => setIsBurgerOpen(!isBurgerOpen)}
            className="text-[#393939] hover:text-[#36BE26] transition-colors font-semibold text-base relative top-[5px]"
          >
            <BurgerOpenIcon />
          </button>
          {isBurgerOpen && (
            <div className="fixed top-0 left-0 w-full h-full p-5 bg-white bg-opacity-40 shadow-lg z-10 flex justify-start items-start">
              <div className="w-full max-w-[700px] bg-white p-5 border border-gray-200 rounded-lg">
                <button
                  onClick={() => setIsBurgerOpen(!isBurgerOpen)}
                  className="text-[#393939] hover:text-[#36BE26] transition-colors font-semibold text-base relative mb-3 p-3"
                >
                  <BurgerCloseIcon />
                </button>
                {navList.map((item, index) => (
                  <div className="border-b p-4" key={index}>
                    <button
                      onClick={() =>
                        setHoveredIndex(hoveredIndex === index ? null : index)
                      }
                      className="w-full text-left text-[#393939] hover:text-[#36BE26] transition-colors font-semibold text-base"
                    >
                      {item}
                    </button>
                    {hoveredIndex === index && (
                      <div className="pl-4">
                        {itemLinks.map((link, linkIndex) => (
                          <a
                            href="#"
                            className="block py-2 text-sm text-[#393939] border-b-2 border-[#43ff00] border-opacity-0 hover:border-opacity-100"
                            key={linkIndex}
                          >
                            {link}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-8 float-end">
          {navList.map((item, index) => (
            <div
              className="group relative"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button className="text-[#393939] hover:text-[#36BE26] transition-colors font-semibold text-base">
                {item}
              </button>

              {hoveredIndex === index && (
                <div className="absolute group-hover:block bg-white shadow-lg px-[31px] py-[19px] min-w-80 z-10">
                  {itemLinks.map((link, linkIndex) => (
                    <div className="px-4 text-start" key={linkIndex}>
                      <a
                        href="#"
                        className="leading-[23.64px] text-sm text-[#393939] border-b-2 border-[#43ff00] border-opacity-0 hover:border-opacity-100"
                      >
                        {link}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export { Menu };

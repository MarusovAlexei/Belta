import React from "react";

const Menu = () => {
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
    <nav className="flex gap-8">
      {navList.map((item, index) => (
        <div className="group relative" key={index}>
          <button className="text-[#393939] hover:text-[#36BE26] transition-colors font-semibold text-base">
            {item}
          </button>

          <div className="absolute hidden group-hover:block bg-white shadow-lg px-[31px] py-[19px] min-w-80 z-10">
            {itemLinks.map((item, index) => (
              <div className="px-4 text-start">
                <a
                  href="#"
                  className="leading-[23.64px] text-sm text-[#393939] border-b-2 border-[#43ff00] border-opacity-0 hover:border-opacity-100"
                  key={index}
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export { Menu };

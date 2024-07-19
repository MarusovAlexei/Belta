import React, { useState } from "react";

const ChangeLanguage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("рус");

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="flex gap-[8px]">
      <div
        className={`font-normal text-base text-[#393939] border-b-2 cursor-pointer max-h-[26px] ${
          selectedLanguage === "бел"
            ? "border-b-[#36BE26]"
            : "border-b-transparent"
        }`}
        onClick={() => handleLanguageChange("бел")}
      >
        бел
      </div>
      <div
        className={`font-normal text-base text-[#393939] border-b-2 cursor-pointer max-h-[26px] ${
          selectedLanguage === "рус"
            ? "border-b-[#36BE26]"
            : "border-b-transparent"
        }`}
        onClick={() => handleLanguageChange("рус")}
      >
        рус
      </div>
    </div>
  );
};

export { ChangeLanguage };

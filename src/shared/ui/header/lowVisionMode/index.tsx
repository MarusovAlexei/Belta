import React, { useState } from "react";
import "./style.css";

const LowVisionMode = () => {
  return (
    <button
      onClick={() => alert("Версия для слабовидящих")}
      className="relative eye-button"
    >
      <svg
        className="eye-icon"
        width="37"
        height="38"
        viewBox="0 0 37 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4755 8.33301C12.8431 8.33301 7.06548 11.5929 2.51708 18.1127C2.38725 18.3009 2.31611 18.5233 2.31263 18.7518C2.30916 18.9804 2.37352 19.2049 2.49757 19.3969C5.99233 24.8674 11.6926 29.1455 18.4755 29.1455C25.1846 29.1455 31.002 24.8544 34.5033 19.3716C34.6244 19.1833 34.6889 18.9642 34.6889 18.7403C34.6889 18.5165 34.6244 18.2973 34.5033 18.1091C30.9941 12.6892 25.1341 8.33301 18.4755 8.33301Z"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.5 24.5205C21.6929 24.5205 24.2812 21.9322 24.2812 18.7393C24.2812 15.5464 21.6929 12.958 18.5 12.958C15.3071 12.958 12.7188 15.5464 12.7188 18.7393C12.7188 21.9322 15.3071 24.5205 18.5 24.5205Z"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-miterlimit="10"
        />
      </svg>
    </button>
  );
};

export { LowVisionMode };

import React from "react";
import { DocumentCard } from "shared/ui/main/document-card";
import road from "shared/icons/document/road.png";
import mainRoad from "shared/icons/document/mainRoad.png";
import phone from "shared/icons/document/phone.png";
import tag from "shared/icons/document/tag.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "./style.css";

const DocumentSection = () => {
  const items = [
    {
      img: road,
      title: "СОГЛАСОВАНИЕ ПРОЕЗДА",
      subTitle: "ДОРОЖНОЕ УПРАВЛЕНИЕ",
    },
    {
      img: phone,
      title: "СОГЛАСОВАНИЕ ПСД И ТУ",
      subTitle: "ТЕХНИЧЕСКИЙ ОТДЕЛ",
    },
    {
      img: mainRoad,
      title: "ДЕЖУРНЫЙ ПО СОГЛАСЛВАНИЮ ДОРОГ И МОСТОВ",
      subTitle: "",
    },
    {
      img: tag,
      title: "ПРОДАЖА ПРОДУКЦИИ",
      subTitle: "",
    },
  ];

  return (
    <div className="py-[40px] mx-auto w-[358px] md:w-[746px] 2xl:w-[100%] max-w-[1502px]">
      <Swiper
        spaceBetween={23}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1536: {
            slidesPerView: 4,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <DocumentCard
              img={item.img}
              title={item.title}
              subTitle={item.subTitle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { DocumentSection };

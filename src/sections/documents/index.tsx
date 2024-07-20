import React from "react";
import { DocumentCard } from "shared/ui/main/document-card";
import road from "shared/icons/document/road.png";
import mainRoad from "shared/icons/document/mainRoad.png";
import phone from "shared/icons/document/phone.png";
import tag from "shared/icons/document/tag.png";

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
    <div className="flex gap-[23px] py-[80px] mx-auto">
      {items.map((item, index) => (
        <DocumentCard
          img={item.img}
          title={item.title}
          subTitle={item.subTitle}
          key={index}
        />
      ))}
    </div>
  );
};

export { DocumentSection };

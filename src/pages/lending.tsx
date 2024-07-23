import React from "react";
import { InfoSection } from "widgets/info";
import { DocumentSection } from "widgets/documents";
import { Products } from "widgets/products";

const Lending = () => {
  return (
    <>
      <InfoSection />
      <DocumentSection />
      <Products />
    </>
  );
};

export { Lending };

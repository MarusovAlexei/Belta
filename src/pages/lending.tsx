import React from "react";
import { InfoSection } from "sections/info";
import { DocumentSection } from "sections/documents";
import { Products } from "sections/products";

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

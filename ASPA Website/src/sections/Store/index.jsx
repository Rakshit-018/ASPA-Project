import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionHead from "../../components/SectionHead";
import StoreBlock from "./StoreBlock";

const Store = () => {
  const handleStoreClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <SectionContainer>
      <SectionHead title="Store" />
      <StoreBlock />
      <button onClick={handleStoreClick}>Go to Google</button>
    </SectionContainer>
  );
};

export default Store;

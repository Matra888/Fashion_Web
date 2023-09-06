import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import RecommendedItemsData from "./RecommendedItemsData";

const RecommendedItems = ({ bodyType }) => {
  const cards = RecommendedItemsData[bodyType] || []; // Use the selected type to get card data
  return (
    <div className="container d-flex justify-content-around flex-wrap">
      {cards.map((card, index) => (
        <ItemCard
          key={index}
          recommendedItemImage={card.recommendedItemImage}
          recommendedItemLink={card.recommendedItemLink}
          bodyType={bodyType}
        />
      ))}
    </div>
  );
};

export default RecommendedItems;

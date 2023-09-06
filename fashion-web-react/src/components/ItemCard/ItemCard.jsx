import React from "react";
import "./ItemCard.scss";

const ItemCard = ({ recommendedItemImage, recommendedItemLink }) => {
  return (
    <a className="item-card" href={recommendedItemLink} target="_blank">
      <img src={recommendedItemImage} alt="" className="img-thumbnail" />
      <button className="button btn btn-success">Shop item</button>
    </a>
  );
};

export default ItemCard;

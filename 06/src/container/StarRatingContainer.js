import React, { useState } from "react";
import StarRating from "../components/StarRating";
import "../assets/styles/StarRatingContainer.css";

export default function StarRatingContainer() {
  const totalStarts = 10
  const [selectStar, setSelectStar] = useState(0);
  const onSelect = (index) => {
    setSelectStar(index);
  }

  return (
    <div className="star-rating-container">
      <h1 className="title">Star Rating</h1>
      <p className="rating-desc"> <span className={selectStar > 0 ? "point" : ""}>{ selectStar }</span> / { totalStarts }</p>
      <StarRating totalStarts={totalStarts} selectStar={selectStar} onSelect={onSelect} />
    </div>
  );
}
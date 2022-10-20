import React from "react";
import Star from "./Star";
import "../assets/styles/StarRating.css";

export default function StarRating({ totalStarts = 5, selectStar, onSelect }) {
  const createArray = length => [...Array(length)];

  return (
    <div className="star-rating">
      {
        createArray(totalStarts).map((n, i) => <Star key={i} index={i} selected={i < selectStar} onSelect={onSelect} />)
      }
    </div>
  );
}

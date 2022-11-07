import React, { useState } from "react";
import StarRating from "../components/StarRating";
import "../assets/styles/StarRatingContainer.css";
import icons from "../assets/images/*.png";

export default function StarRatingContainer() {
  const totalStarts = 5
  const [selectStar, setSelectStar] = useState(0);
  const [ratingImage, setRatingImage] = useState(null);
  const onSelect = (index) => {
    setSelectStar(index);
    setRatingImage(icons[index]);
  }

  return (
    <div className="star-rating-container">
      <h1 className="title">Star Rating!</h1>
      <p className="rating-desc"> <span className={selectStar > 0 ? "point" : ""}>{selectStar}</span> / {totalStarts}</p>
      <StarRating totalStarts={totalStarts} selectStar={selectStar} onSelect={onSelect} />
      <div className="rating-img-wrapper">
        {
          selectStar > 0
          &&
          <figure>
              <img draggable="false" className="expression-icon" src={ratingImage} />
              <figcaption className="fig-caption"><a href="https://www.flaticon.com/free-icons/emoji" title="emoji icons">Emoji icons created by Senapedia - Flaticon</a></figcaption>
          </figure>
        }
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import Star from "../components/Star";

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const createArray = (length) => [...Array(length)];

  return (
    <>
      {
        createArray(totalStars).map((_, idx) => <Star key={idx} selected={selectedStars > idx} onSelect={ () => setSelectedStars(idx +1) } />)
      }
      <p> {selectedStars} / { totalStars } stars</p>
    </>
    )
}

export default StarRating;

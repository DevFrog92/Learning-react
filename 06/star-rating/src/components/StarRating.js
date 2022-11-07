import Star from "../components/Star";

const StarRating = ({ style = {}, totalStars = 5, selectedStars = 0, onRate= f => f }) => {
  const createArray = (length) => [...Array(length)];

  return (
    <div style={{padding: '5px', ...style}}>
      {
        createArray(totalStars).map((_, idx) =>
          <Star key={idx} selected={selectedStars > idx} onSelect={() => onRate(idx + 1)} />)
      }
      <p> {selectedStars} / { totalStars } stars</p>
    </div>
    )
}

export default StarRating;

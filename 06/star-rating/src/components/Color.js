import StarRating from './StarRating';
import { FaTrash } from 'react-icons/fa';
import { useColors } from '../hooks/useColors';

// 관심사: 이벤트가 발생했다는 것과 사용자가 제거하고 싶은 색에 대한 정보를 부모에게 전달하는 것
const Color = ({ id, title, color, rating }) => {
  const { rateColor, removeColor } = useColors();

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash/>
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating selectedStars={rating} onRate={ rating => rateColor(id, rating)} />
    </section>
  )
};

export default Color;

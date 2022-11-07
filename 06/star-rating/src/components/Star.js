import { FaStar } from "react-icons/fa";

const Star = ({ selected, onSelect}) => {
  return <FaStar style={{'cursor':"pointer"}} color={selected ? "red" : "grey"} onClick={ onSelect } />
}

Star.defaultProps = {
  selected: false,
  onSelect: f => f
}

export default Star;

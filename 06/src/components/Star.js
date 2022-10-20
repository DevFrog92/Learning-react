import React from "react"
import { FaStar } from "react-icons/fa";
import "../assets/styles/Star.css";
// Star 컴포넌트의 관심은 이벤트가 발생했다는 것과, 컴포넌트의 색에 대한 정보다.
export default function Start({ index, selected, onSelect}) {
  return <FaStar className="star-icon" color={ selected ? "orange" : "gray" } onClick={() => onSelect(index + 1)} />
}

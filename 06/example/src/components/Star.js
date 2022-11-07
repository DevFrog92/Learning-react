import React from "react"
import { FaStar } from "react-icons/fa";
import "../assets/styles/Star.css";

export default function Start({ index, selected, onSelect}) {
  return <FaStar className="star-icon" color={ selected ? "orange" : "gray" } onClick={() => onSelect(index + 1)} />
}

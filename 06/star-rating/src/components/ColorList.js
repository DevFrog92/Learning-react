import { useContext } from "react"
import { ColorContext } from "../index"
import Color from "./Color"

const ColorList = () => {
  const { colors } = useContext(ColorContext);

  if (!colors.length) return <div>표시할 색이 없습니다.</div>

  return (
    <div className="color-list">
      {colors.map(color =>
        <Color key={color.id} {...color} />)}
    </div>
  )
}

export default ColorList;


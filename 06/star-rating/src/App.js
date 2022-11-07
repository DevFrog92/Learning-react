import colorData from "./data/colors.json";
import ColorList from "./components/ColorList";
import { useState } from "react";
import AddColorForm from "./components/AddColorForm";
import { v4 } from "uuid"

const App = () => {
  const [colors, setColors] = useState(colorData.colors);

  return (
    <div className="App">
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ];

          setColors(newColors);
        }}
      />
      <ColorList colors={colors}
        onRemoveColor={
          (id) => {
            const newColors = colors.filter(color => color.id !== id);
            setColors(newColors)
          }
        }
        onRateColor={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color)
          setColors(newColors)
        }}
      />
    </div>
  );
}

export default App;

import colorData from "./data/colors.json";
import ColorList from "./components/ColorList";
import { useState } from "react";

const App = () => {
  const [colors, setColors] = useState(colorData.colors);

  return (
    <div className="App">
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

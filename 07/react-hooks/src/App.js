import { useState } from "react";
import { PureCat } from "./components/Cat";

const App = () => {
  const [cats, setCats] = useState(['삼색이', '고등어', '치즈']);

  return <div>
    {
      cats.map((it, idx) => (
        <PureCat key={idx} name={it} meow={name=> console.log(`${name} has meowed!`) } />
      ))
    }
    <button onClick={() => setCats([...cats, prompt('Name a Cat')])}>
      Add a cat
    </button>
  </div>
}

export default App;
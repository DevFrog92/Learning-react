import React, { createContext, useState } from "react";

const ColorContext = createContext();

export default function ColorProvider({ children }) {
  const colorData = {};
  const [colors, setColors] = useState(colorData);
  // colors 변경되면 리렌더링이 발생한다.
  // setColors 함수를 사용자에게 노출하는 것 보다 각 연산의 경우에 대한 함수를 생성해서 사용하는 것이 더 좋다.
  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
}

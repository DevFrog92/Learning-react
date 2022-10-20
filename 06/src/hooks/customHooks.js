import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initialValue) // value의 값을 초깃값으로 재설정할 때 사용할 함수
  ];
};

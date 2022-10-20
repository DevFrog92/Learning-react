import React, { useRef, useState } from "react";
import Form from "../components/Form";
import { useInput } from "../hooks/customHooks";


export default function FromContainer({onNewColor = f => f}) {
  // 참조 값이 아니라 리액트 상태를 통해 타이틀과 색을 저장한다.
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = e => {
    e.preventDefault();
    console.log(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return <Form titleProps={titleProps} colorProps={colorProps} submit={submit}/>;
}

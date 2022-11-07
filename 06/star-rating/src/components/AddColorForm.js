import React, { useRef } from 'react'

const AddColorForm = ({ onNewColor = f => f }) => {
  const textTitle = useRef();
  const hexColor = useRef();

  const submit = e => {
    e.preventDefault();

    const title = textTitle.current.value;
    const color = hexColor.current.value;

    onNewColor(title, color);

    textTitle.current.value = '';
    hexColor.current.value = '#000000';
  }

  return (
    <form onSubmit={submit}>
      <input ref={textTitle} type='text' placeholder='color title...' required />
      <input ref={hexColor} type='color' required />
      <button>ADD</button>
    </form>
  )
}

export default AddColorForm;

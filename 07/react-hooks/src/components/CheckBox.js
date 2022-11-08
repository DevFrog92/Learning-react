import { useReducer } from "react"

const CheckBox = () => {
  const [checked, toggle] = useReducer((fiber, queue, action) => {
    console.log('hello', fiber, queue, action);
    return !fiber
  }, false);

  const [number, setNumber] = useReducer(
    (fiber, hr,queue, action, ...arg) => {
      console.log(fiber, hr,queue, action, arg);
      return 10;
    },
    0
  );


  return (
    <>
      <input type='checkbox' value={checked} onChange={toggle} />
      {checked ? 'checked' : 'not checked'}
      <h1 onClick={() =>  setNumber(30,40)}>{number}</h1>
    </>
  );
}

export default CheckBox;

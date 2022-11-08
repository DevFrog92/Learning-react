import React from "react";

const Cat = ({ name, meow=f=>f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={()=>meow(name)}>{ name}</p>
}

export default React.memo(Cat);

export const PureCat = React.memo(
  Cat,
  (prevProps, nextProps) => prevProps.name === nextProps.name
)
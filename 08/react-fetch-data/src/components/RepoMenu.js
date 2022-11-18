import { useEffect } from "react";
import useIterator from "../hook/useIterator";

const RepoMenu = ({
  repositories,
}) => {
  const [{ name }, previous, next] = useIterator({items:repositories});

  return (
    <>
    <div style={{display: "flex"}}>
      <button onClick={previous}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
      </div>
    </>
  )
}

export default RepoMenu;

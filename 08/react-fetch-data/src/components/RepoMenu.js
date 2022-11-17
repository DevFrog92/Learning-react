import { useEffect } from "react";
import useIterator from "../hook/useIterator";

const RepoMenu = ({
  repositories,
  onSelect = f => f,
}) => {
  const [{ name }, previous, next] = useIterator({items:repositories});

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name, onSelect]);

  return (
    <div style={{display: "flex"}}>
      <button onClick={previous}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
    </div>
  )
}

export default RepoMenu;

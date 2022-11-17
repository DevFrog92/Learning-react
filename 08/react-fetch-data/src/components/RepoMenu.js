import { useEffect } from "react";
import useIterator from "../hook/useIterator";
import RepositoryReadme from "./LoadReadme";

const RepoMenu = ({
  repositories,
  login
}) => {
  const [{ name }, previous, next] = useIterator({items:repositories});

  return (
    <>
    <div style={{display: "flex"}}>
      <button onClick={previous}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  )
}

export default RepoMenu;

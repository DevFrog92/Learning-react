import React, { useEffect, useState } from "react";

const GithubUser = ({ login }) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .catch(console.error)
  }, [login]);

  if (data) {
    return <pre>{ JSON.stringify(data,null,2)}</pre>
  }

  return null;
}


const App = () => {
  return <GithubUser login="DevFrog92"/>
}

export default App;

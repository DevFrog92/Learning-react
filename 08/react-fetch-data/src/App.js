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

const tahoe_peaks = [
  { name: "Freel Peak", elevation: 10091},
  { name: "Monument Peak", elevation: 10067},
  { name: "Pyramid Peak", elevation: 9983},
  { name: "Mt. Tallac", elevation: 9735},
]

function List({ data = [], renderEmpty, renderItem }) {
  return !data.length ? (
    renderEmpty) : (
      <ul>
        {
          data.map((item, i) => (
            <li key={i}>{ renderItem(item) }</li>
          ))
        }
      </ul>
    )
}

const App = () => {
  return <List
    data={tahoe_peaks}
    renderEmpty={<p>This List is empty</p>}
    renderItem={item =>
      <>
        {item.name} - {item.elevation.toLocaleString()}ft
      </>
    }
  />
}

export default App;

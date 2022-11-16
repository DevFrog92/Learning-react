import React, { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';
import { FixedSizeList } from "react-window";

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

const bigList = [...Array(5000)].map(() => ({
  name: faker.name.fullName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}))

const App = () => {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={ 50}
      />
      <p>
        { bigList[index].name}-{bigList[index].email }
      </p>
    </div>
  )
  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth}
      itemCount={bigList.length}
      itemSize={50}
    >
      { renderRow }
    </FixedSizeList>
  )
}

export default App;

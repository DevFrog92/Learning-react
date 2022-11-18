import React, { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';
import { FixedSizeList } from "react-window";
import GithubUser from "./components/GithubUser";
import SearchForm from "./components/SearchForm";
import UserRepositories from "./components/UserRepositories";
import RepositoryReadme from "./components/RepositoryReadme";


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
  const [login, setLogin] = useState('DevFrog92');
  const [repo, setRepo] = useState("Learning-react");

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
    <>
      <SearchForm value={login} onSearch={setLogin} />
      { login && <GithubUser login={login} />}
      { login && <UserRepositories
        login={login}
        repo={repo}
        onSelect={setRepo}
      />}
      { login && <RepositoryReadme login={login} repo={ repo} />}
    </>
  )
}

export default App;

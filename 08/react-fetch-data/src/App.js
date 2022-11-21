import React, { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';
import { FixedSizeList } from "react-window";
import GithubUser from "./components/GithubUser";
import SearchForm from "./components/SearchForm";
import UserRepositories from "./components/UserRepositories";
import RepositoryReadme from "./components/RepositoryReadme";
import { client } from "./graphql/github";

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
  const [login, setLogin] = useState('');
  const [repo, setRepo] = useState("Learning-react");

  useEffect(() => {
  const query = `
    query findRepos($login:String!){
      user(login:$login){
        login
        name
        location
        avatar_url: avatarUrl
        repositories(first:100){
          totalCount
          nodes {
            name
          }
        }
      }
    }
  `;
    console.log(client);

    client.request(query, { login: "DevFrog92" })
      .then(results => JSON.stringify(results, null, 2))
      .then(console.log)
      .catch(console.error);
  })

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

  const handleSearch = login => {
    if (login) return setLogin(login);
    setLogin("");
    setRepo("")
  }

  if (!login) {
    return (
      <SearchForm value={login} onSearch={handleSearch}/>
    )
  }

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

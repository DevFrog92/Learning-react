import Fetch from "./Fetch";
import UserRepositories from "./UserRepositories"
const GithubUser = ({ login }) => {
  return <Fetch uri={`https://api.github.com/users/${login}`} renderSuccess={ UserDetail} />
}

const UserDetail = ({ data }) => {
  return (
    <div className="githubUser">
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{width: 200}}
      />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{ data.name}</p>}
        {data.location && <p>{ data.location}</p>}
      </div>
      <UserRepositories login={data.login} onSelect={ repoName => console.log(`${repoName} selected`)} />
    </div>
  );
}

export default GithubUser;
import Fetch from "./Fetch";
import RepoMenu from "./RepoMenu";

const UserRepositories = ({
  login,
  selectedRepo,
  onSelect = f => f
}) => {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <RepoMenu
          repositories={data}
          selectedRepo={selectedRepo}
          login={ login}
          onSelect={onSelect}
        />
      )}
    />
  )
}

export default UserRepositories;

import React from "react";
import HeavyCalc from "./pages/HeavyCalc";

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    window.setTimeout(() => {
      setUser({ name: "Kiara" });
    }, 1000);
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

function App() {
  return <HeavyCalc/>
}

const GreetUser = React.memo(() => {
  const user = React.useContext(UserContext);

  if (!user) {
    return "Hi there!";
  }

  return `Hello ${user.name}!`;
});

export default App;
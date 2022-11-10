import React from "react";

const GreetUser = React.memo(({ user }) => {
  if (!user) {
    return "Hi there!";
  }
  return `Hello ${user.name}!`;
});

export default GreetUser;

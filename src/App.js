import "./App.css";
import React, { useState } from "react";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Tony", email: "tony@email.com" },
    { name: "Joe", email: "joe@email.com" },
    { name: "Comfort", email: "comfort@email.com" },
  ]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return(
    <>
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </>
  );
}

export default App;
import "./App.css";
import React, { useState } from "react";

import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import { v4 as uuid} from 'uuid';

const App = () => {
  // users state with contains 3 default users
  const [users, setUsers] = useState([
    // each user as an id, name and email
    { id: uuid(), name: "Tony", email: "tony@email.com", gen: "10"},
    { id: uuid(), name: "Joe", email: "joe@email.com", gen: "09" },
    { id: uuid(), name: "Comfort", email: "comfort@email.com", gen: "11" },
  ]);

  //addUser function which takes in a user object and adds it to the users state array
  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  //editUser function which takes in an id and a user object and replaces the user object in the users state array with the new user object
  const editUser = (id, newUser) => {
    const editedUsers = users.map((user) => {
      if (user.id === id) {
        return newUser;
      }
      return user;
    });

    setUsers(editedUsers);
  };

  //deleteUser function which takes in an id and removes the user object from the users state array
  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => {
      if (user.id !== id) 
      return user;
    });

    setUsers(filteredUsers);
  };

  return(
    <>
      {/* UserForm takes in the addUSer function to add new users to the users state array */}
      <UserForm addUser={addUser} />

      {/* UserList takes in the users state array and the editUser and deleteUser functions to edit and delete users from the users state array */}
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </>
  );
}

export default App;
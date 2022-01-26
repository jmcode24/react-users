import React from "react";
import Item from "./Item";

const UserList = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-3">
            <h1 className="h2 text-info">List of users</h1>
            {/* map through users array and return an Item component for each user */}
            {props.users.map((user, index) => {
              return (
                // pass in the user object and the editUser and deleteUser functions
              <div key={index}>
                <div class="card mt-1 mb-1 text-center bg-dark">
                  <div class="card-body">
                    {/* <h5 className="text-warning">{user.name}</h5>
                    <h5 className="text-white">{user.email}</h5>
                    <h5 className="text-success">{user.gen}</h5> */}
                    <Item
                      key={index}
                      user={user}
                      editUser={props.editUser}
                      deleteUser={props.deleteUser}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
import React from "react";

const UserList = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-3">
            <h1 className="h2 text-info">List of users</h1>
            {props.users.map((user, index) => {
              return (
              <div key={index}>
                <h5 className="text-warning">{user.name}</h5>
                <h5 className="text-secondary">{user.email}</h5>
                <h5 className="text-success">{user.gen}</h5>
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
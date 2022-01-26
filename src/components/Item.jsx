import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Item = (props) => {
  //boolean state to control the modal
  const [isShowing, setIsShowing] = useState(false);

  //variables to hold the user's id, name and email
  const id = props.user.id;
  const username = props.user.name;
  const useremail = props.user.email;
  const usergen = props.user.gen;

  //user name state for editing
  const [name, setName] = useState(username);
  //user email state for editing
  const [email, setEmail] = useState(useremail);
  // user gen state for editing
  const [gen, setGen] = useState(usergen);

  //function to handle editing user details
  const handleEdit = () => {
    let editedUser = {
      id: id,
      name: name,
      email: email,
      gen: gen,
      
    };

    //call the editUser function from the parent component and pass in the user's id and the new user object
    props.editUser(id, editedUser);
    //close the modal
    setIsShowing(false);
  };

  return (
    <div>
      <div className="text-center">
      <h5 className="text-white"><span className="text-warning">Name:</span> {username}</h5>
      <h5 className="text-white"><span className="text-info">Email:</span> {useremail}</h5>
      <h5 className="text-white"><span className="text-success">Gen:</span> {usergen}</h5>
      </div>
      <hr className="bg-secondary"/>
      <Button className="mr-4"
        onClick={() => {
          setIsShowing(true);
        }}
      >
        Edit
      </Button>
      <Button
        variant="danger"
        onClick={() => {
          props.deleteUser(id);
        }}
      >
        Delete
      </Button>

      <Modal
        show={isShowing}
        onHide={() => {
          setIsShowing(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="form-control"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input className="form-control mt-2"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input className="form-control mt-2"
            type="text"
            placeholder="Gen. Year"
            value={gen}
            onChange={(e) => {
              setGen(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setIsShowing(false);
          }}>Close</Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEdit();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Item;
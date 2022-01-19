import React, { useState } from "react";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenChange = (event) => {
    setGen(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      name: name,
      email: email,
      gen: gen,
    };

    props.addUser(newUser);

    setName("");
    setEmail("");
    setGen("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-3 border">
           <form className="mt-2" onSubmit={handleSubmit}>
             <div className="form-group">
                <label className="text-danger h5">Name</label>
                <input className="form-control" name="name" type="text" placeholder="Full Name" value={name} onChange={handleNameChange} />
             </div>
             <div className="form-group">
                <label className="text-danger h5">Email</label>
                <input className="form-control" name="email" type="email" placeholder="Your Email" value={email} onChange={handleEmailChange} />
             </div>
             <div className="form-group">
                <label className="text-danger h5">Generation</label>
                <input className="form-control" name="gen" type="text" placeholder="Gen. Year" value={gen} onChange={handleGenChange} />
             </div>
             </form>
             <input className="btn btn-primary btn-block mb-4" type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserForm;
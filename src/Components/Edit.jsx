import React, { useState, useContext } from "react";
import "./Edit.css";
import { UserContext } from "./Context";

function Edit() {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [record, setRecord] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    if (
      user.firstName === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.phone === ""
    ) {
      setError(true);
      alert("Please enter all the fields");
    } else {
      alert("Updated Successfully");
      setSubmitted(true);
      setError(false);
      const newRecord = { ...user, id: new Date().getTime().toString() };
      setRecord([...record, newRecord]);
    }
  };

  let name, value;
  const handleinputs = (e) => {
    console.log(e.target.value);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: user.value ? "" : "none",
        }}
      >
        <h3>User {user.firstName} successfully registered!!</h3>
      </div>
    );
  };

  // error message
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h3>Please enter all the fields</h3>
      </div>
    );
  };

  return (
    <div>
      <div className="right-section">
        <div className="signUp-form">
          <h2> UPDATE REGISTER FORM</h2>
          <div className="name-section">
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              value={user.firstName}
              onChange={handleinputs}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={user.lastName}
              onChange={handleinputs}
            />
          </div>

          <div className="page-division">
            <label htmlFor="phone">Phone-Number:</label>
            <input
              name="phone"
              type="number"
              placeholder="xxxxxxxxxx"
              value={user.phone}
              onChange={handleinputs}
            />
          </div>

          <div className="page-division">
            <label htmlFor="email">E mail:</label>
            <input
              name="email"
              type="email"
              placeholder="abc@gmail.com"
              value={user.email}
              onChange={handleinputs}
            />
          </div>

          <button onClick={formSubmit}>SAVE</button>
          <div className="error">
            {errorMessage()}
            {successMessage()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;

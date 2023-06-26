import React, { useState, useContext } from "react";
import "./Form.css";
// import logo from "./Assets/logo1.png.jpeg";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./Context";
import SignIn from "./SignIn";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [record, setRecord] = useState([]);

  const { user, setUser, favourites, setFavourites } = useContext(UserContext);

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
      alert("Registered Successfully");
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

  const navigate = useNavigate();

  const formEdit = () => {
    navigate("/edit");
  };

  const showFavourites = () => {
    navigate("/favourites");
  };
let {firstName,phone}=user;
  const addFavourites = () => {
    setFavourites();
  };

  return (
    <div className="container">
      <main>
        <div className="left-section">
          <SignIn />
          {/* <img id="applogo" src={logo} alt="" />
          <div className="login-form">
            <div>
              {" "}
              <h1 id="heading">WELCOME!</h1>{" "}
            </div>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />

            <button>LOGIN</button>

            <span className="forgot-password">
              <a
                href="no-javascript1.html"
                title="Forgot Password"
                id="link-reset"
              >
                Forgot Password?
              </a>
            </span>
          </div> */}
        </div>

        <div className="right-section">
          <div className="signUp-form">
            <h2>REGISTER FORM</h2>
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
          <div>
            {record.map((curElem) => {
              return (
                <div className="showDataStyle">
                  <h2>Contact details</h2>
                  <p>{curElem.firstName}</p>
                  <p>{curElem.lastName}</p>
                  <p>{curElem.phone}</p>
                  <p>{curElem.email}</p>
                  <button onClick={formEdit}>EDIT</button>
                  <button onClick={addFavourites}>ADD TO FAVOURITE</button>
                  <button onClick={showFavourites}>FAVOURITES</button>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Form;

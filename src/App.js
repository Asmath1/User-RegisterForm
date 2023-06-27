import "./App.css";
import React, { useState } from "react";
import Edit from "./Components/Edit";
import Login from "./Components/Register";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Favourites from "./Components/Favourites";
import { UserContext } from "./Components/Context";

function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [favourites, setFavourites] = useState([]);
  return (
    <>
      <div className="App">
        <UserContext.Provider
          value={{ user, setUser, favourites, setFavourites }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import React from "react";
import Edit from "./Components/Edit";
import Login from "./Components/Login";
import { Route, Routes , BrowserRouter} from "react-router-dom";
import Favourites from "./Components/Favourites";

function App() {
  return (
    <>
      <div className="App">
        {/* <Login /> */}
		<BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/favourites" element={<Favourites />} />

        </Routes>
		</BrowserRouter>
		
		
      </div>
    </>
  );
}

export default App;

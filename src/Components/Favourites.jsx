import React, { useContext, useState } from "react";
import "./Favourites.css";
import { UserContext } from "./Context";

function Favourites() {
  const { favourites, setFavourites } = useContext(UserContext);
   console.log(favourites);

  return (
    <div className="favourite">
      <div>
      <h2>FAVOURITE CONTACT LIST </h2>
      <table className="tabList" border={2}  >

        <tr>
          <th>First-Name</th>
          <th>Last-Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
          {favourites.map((curElem) => {
            return (
              <tr>
                <td>{curElem.firstName}</td>
                <td>{curElem.lastName}</td>
                <td>{curElem.phone}</td>
                <td>{curElem.email}</td>
                
              </tr>
            );
          })}
        
      </table>
      </div>
    </div>
  );
}

export default Favourites;

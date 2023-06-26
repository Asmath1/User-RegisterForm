import React, { createContext, useState } from "react";
import Edit from "./Edit";
import Form from "./Form";

export const UserContext = createContext();



// function Context() {
//     const [user, setUser] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//       });
//   return (
//     <div className="container">
//       <userContext.Provider value={{ user, setUser}}>
//         <Form />
//         <Edit />
//       </userContext.Provider>
//     </div>
//   );
// }



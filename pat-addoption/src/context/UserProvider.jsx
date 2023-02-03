import React from "react";
// import { useEffect } from "react";
import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  // const obj = {
  //   Id: 1,
  //   firstName: "May",
  //   lastName: "Aviram",
  //   email: "example@gmail.com",
  //   phoneNumber: 542222222,
  //   password: 1234,
  //   role: "admin",
  // };
  // const [user, setUser] = useState(obj);

  const [user, setUser] = useState();
  // useEffect(() => {
  //   console.log("user:", user);
  // }, user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };

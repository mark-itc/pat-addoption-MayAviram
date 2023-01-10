import React from "react";
// import { useEffect } from "react";
import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const obj = {
    Id: 1,
    FirstName: "May",
    LastName: "Aviram",
    Email: "example@gmail.com",
    PhoneNumber: 542222222,
    Password: 1234,
    role: "admin",
  };
  // const [user, setUser] = useState(obj);

  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };

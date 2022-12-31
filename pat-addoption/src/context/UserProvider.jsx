import React from "react";
// import { useEffect } from "react";
import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const obj = {
    FirstName: "May",
    LastName: "Aviram",
  };
  const [user, setUser] = useState(obj);

  // const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };

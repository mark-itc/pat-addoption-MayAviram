import React, { useEffect, createContext, useState } from "react";
import localforage from "localforage";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const initUser = async () => {
      try {
        const localUser = await localforage.getItem("user");
        if (!localUser) {
          setUser(null);
          return;
        } else {
          setUser(localUser);
        }
      } catch (err) {
        console.log(err);
      }
    };
    initUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };

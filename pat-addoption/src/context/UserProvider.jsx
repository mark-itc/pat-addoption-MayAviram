import React, { useEffect, createContext, useState } from "react";
import localforage from "localforage";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState();
  // const [user, setUser] = useState(null);

  // const updateUser = () => {
  //   setUser({
  //     token: user.token,
  //     firstName: user.firstName,
  //     role: data.role,
  //   });
  // };
  useEffect(() => {
    const initUser = async () => {
      try {
        const localUser = await localforage.getItem("user");
        if (!localUser) {
          // await localforage.setItem("user", null);
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

  useEffect(() => {
    console.log("user update: ", user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };

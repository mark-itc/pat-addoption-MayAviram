import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export default function HeaderSite() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {!user ? (
        <h1> Welcome to our pet addopt site!</h1>
      ) : (
        <h1>
          Welcome {user.FirstName} {user.LastName} to our pet addopt site!
        </h1>
      )}
    </div>
  );
}

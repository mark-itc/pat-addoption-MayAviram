import React from "react";
import { useContext } from "react";

import { UserContext } from "../context/UserProvider";

export default function HeaderSite() {
  const { user } = useContext(UserContext);
  return (
    <div>
      {!user ? (
        <h2> Welcome to our pet addopt site!</h2>
      ) : (
        <h2>
          Welcome {user.FirstName} {user.LastName} to our pet addopt site!
        </h2>
      )}
    </div>
  );
}

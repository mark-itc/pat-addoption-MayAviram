import React, { useState } from "react";
import PetsList from "../../components/Admin/PetsList";
import UserDetails from "../../components/Admin/UserDetails";
import UsersList from "../../components/Admin/UsersList";
import Header from "../../components/Header";
export default function Dashboard() {
  const [showUser, setShowUser] = useState(false);
  const [user, setUser] = useState();

  const showUserDetails = (user) => {
    if (user) {
      setShowUser(true);
      setUser(user);
    }
  };

  const closeDetails = () => {
    setShowUser(false);
    setUser(null);
  };

  return (
    <div>
      <Header>
        <h2>Dashboard</h2>
      </Header>
      {!showUser ? (
        <>
          <UsersList showDetails={showUserDetails} />
          <PetsList />
        </>
      ) : (
        <UserDetails closeDetails={closeDetails} user={user} />
      )}
    </div>
  );
}

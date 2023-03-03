import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { UserContext } from "../../context/UserProvider";
import localforage from "localforage";

export default function SaveButton({ createNewUser }) {
  const { user, setUser } = useContext(UserContext);

  const saveChanges = async (e) => {
    const newUer = createNewUser();

    try {
      const response = await axios.put(
        `http://localhost:3001/user/${user.user._id}`,
        {
          ...newUer,
        }
      );
      const data = response.data;
      console.log("data: ", data);

      await localforage.setItem("user", data);
      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Button
        variant="dark"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          saveChanges();
        }}
      >
        Submit
      </Button>
    </div>
  );
}

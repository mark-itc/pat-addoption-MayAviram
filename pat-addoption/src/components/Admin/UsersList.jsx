import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../../css/table.css";

export default function UsersList({ showDetails }) {
  const [usersList, setUsersList] = useState();
  const userParamList = ["role", "firstName", "lastName", "email", "bio"];
  const [keys, setKeys] = useState();
  useEffect(() => {
    const getUsersList = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user", {
          withCredentials: true,
        });

        const data = response.data.users;
        setUsersList(data);
        if (data[0]) {
          setKeys(Object.keys(data[0]));
        }
      } catch (err) {
        console.log("err", err);
      }
    };
    getUsersList();
  }, []);
  function formatString(str) {
    str = str.replace(/([A-Z])/g, " $1").toLowerCase();
    return str;
  }
  return (
    <div className="usersListContainer">
      <h3>Users List</h3>
      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>#</th>

              {keys &&
                keys.map((key, index) => {
                  if (!userParamList.includes(key)) {
                    return;
                  } else {
                    return <th key={index}>{formatString(key)}</th>;
                  }
                })}
            </tr>
          </thead>
          <tbody>
            {usersList &&
              usersList.map((user, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => {
                      showDetails(user);
                    }}
                  >
                    <td>{index + 1}</td>
                    {keys.map((key, index) => {
                      if (!userParamList.includes(key)) {
                        return;
                      } else {
                        return <td key={index}>{user[key]}</td>;
                      }
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

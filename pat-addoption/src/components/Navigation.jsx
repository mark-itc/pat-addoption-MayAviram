import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import localforage from "localforage";

// import Button from "react-bootstrap/Button";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";
// import { Link } from "react-router-dom";

export default function Navigation() {
  const { user, setUser } = useContext(UserContext);

  const logout = async () => {
    try {
      localforage.clear();
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Adopt a pet</Navbar.Brand>

          <Nav className="me-auto">
            {/* <Link to={"/ProfileSettings"}>try</Link> */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/SearchPage">Search</Nav.Link>
            {user ? (
              <>
                <Nav.Link href="/ProfileSettings">Profile Settings</Nav.Link>
                {user.user.role === "admin" && (
                  <>
                    <NavDropdown title="Admin" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="/Admin/AddPet">
                        Add Pet
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/Admin/Dashboard">
                        Dashboard
                      </NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link href="/Admin/AddPet">Add Pet</Nav.Link>
                    <Nav.Link href="/Admin/Dashboard">Dashboard</Nav.Link> */}
                  </>
                )}
              </>
            ) : null}
          </Nav>
          {user ? (
            <>
              <Navbar.Text>Signed in as: {user.user.firstName}</Navbar.Text>
              <Navbar.Text>
                {/* <Button
                  variant="link"
                  onClick={() => {
                    // setUser(null);
                  }}
                >
                  Log Out
                </Button> */}
                <a
                  href="/"
                  onClick={() => {
                    // setUser(null);
                    logout();
                  }}
                >
                  Log Out
                </a>
              </Navbar.Text>
            </>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
}

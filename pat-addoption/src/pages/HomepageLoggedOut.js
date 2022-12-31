import React from "react";
import LoginSignupButton from "../components/HomepageLoggedOut/LoginSignupButton";
import LoginSignupModal from "../components/HomepageLoggedOut/LoginSignupModal";
import HeaderSite from "../components/HeaderSite";
import TextAboutSiteService from "../components/HomepageLoggedOut/TextAboutSiteService";
import LinkToPage from "../components/LinkToPage";
import { useState } from "react";

export default function HomepageLoggedOut() {
  const [modalShow, setModalShow] = useState(false);
  const [buttonType, setButtonType] = useState(null);
  return (
    <div>
      HomepageLoggedOut
      <HeaderSite />
      <TextAboutSiteService />
      <LoginSignupModal
        type={buttonType}
        show={modalShow}
        onHide={() => setModalShow(false)}
        changetype={() =>
          setButtonType(buttonType === "Login" ? "SignUp" : "Login")
        }
      />
      <div>
        <LoginSignupButton
          type="Log In"
          func={() => {
            setModalShow(true);
            setButtonType("Login");
          }}
        />
        <LoginSignupButton
          type="Sign Up"
          func={() => {
            setModalShow(true);
            setButtonType("SignUp");
          }}
        />
      </div>
      <LinkToPage page={"SearchPage"} text={"Search A Pet"} />
    </div>
  );
}

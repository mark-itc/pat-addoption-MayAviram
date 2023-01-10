import React from "react";
import HeaderSite from "../components/HeaderSite";
import LinkToPage from "../components/LinkToPage";
import SearchButton from "../components/HomepageLoggedIn/SearchButton";
import Header from "../components/Header";

export default function HomepageLoggedIn() {
  return (
    <div>
      <Header>
        HomepageLoggedIn
        <HeaderSite />
      </Header>

      <SearchButton />
      <LinkToPage text={"My Pets Page"} page={"MyPetsPage"} />
    </div>
  );
}

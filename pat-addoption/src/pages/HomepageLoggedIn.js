import React from "react";
import HeaderSite from "../components/HeaderSite";
import LinkToPage from "../components/LinkToPage";
import SearchButton from "../components/HomepageLoggedIn/SearchButton";

export default function HomepageLoggedIn() {
  return (
    <div>
      HomepageLoggedIn
      <HeaderSite />
      <SearchButton />
      <LinkToPage text={"My Pets Page"} page={"MyPetsPage"} />
    </div>
  );
}

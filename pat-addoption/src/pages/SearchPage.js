import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/Search/SearchBar";
import ResultsOfSearch from "../components/Search/ResultsOfSearch";
import "../css/searchBar.css";

export default function SearchPage() {
  return (
    <div className="SearchPageContainer">
      <Header>
        <h2>Start your rescue pet search</h2>
      </Header>
      <div className="searchContainer">
        <SearchBar />
        <ResultsOfSearch />
      </div>
    </div>
  );
}

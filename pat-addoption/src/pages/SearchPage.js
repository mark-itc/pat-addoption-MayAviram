import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/Search/SearchBar";
import ResultsOfSearch from "../components/Search/ResultsOfSearch";

export default function SearchPage() {
  return (
    <div>
      <Header>
        <h2>SearchPage</h2>
      </Header>
      <SearchBar />
      <ResultsOfSearch />
    </div>
  );
}

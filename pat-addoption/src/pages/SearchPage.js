import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/Search/SearchBar";
import ResultsOfSearch from "../components/Search/ResultsOfSearch";
import "../css/searchBar.css";
import axios from "axios";

export default function SearchPage() {
  const [petsSearch, setPetsSearch] = useState();

  useEffect(() => {
    const initPetsSearch = async () => {
      try {
        const response = await axios.get("http://localhost:3001/pet");
        const data = response.data;
        setPetsSearch(data.pets);
      } catch (err) {
        console.log(err);
      }
    };
    initPetsSearch();
  }, []);

  return (
    <div className="SearchPageContainer">
      <Header>
        <h2>Start your rescue pet search</h2>
      </Header>
      <div className="searchContainer">
        <SearchBar setPetsSearch={setPetsSearch} />
        <ResultsOfSearch petsSearch={petsSearch} />
      </div>
    </div>
  );
}

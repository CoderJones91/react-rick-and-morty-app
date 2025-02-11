import React from "react";
import styles from "./search.module.scss";

const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");

const Search = ({ setSearch, setPageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input type="search" onChange={(e) => {
          setPageNumber(1);
          setSearch(e.target.value);
        }} 
        placeholder="Search for characters"
        />
    </form>
  );
};

export default Search;
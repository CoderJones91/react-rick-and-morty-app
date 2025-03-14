import React from "react";
import styles from "./search.module.scss";

const Search = ({ setSearch, setPageNumber }) => {
  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5 mt-5`}
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
import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchItem = ({ searchValue, searchItem, handleSearch }) => {
  return (
    <section className="sec">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="search"
      />
      {/* <FaSearch
        role="button"
        onClick={() => {
          console.log("hello");
          searchItem(searchValue);
        }}
      /> */}
    </section>
  );
};

export default SearchItem;

import React from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  };

  const handleClick = (e) => {
    if (e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  };

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={handleSubmit}
        type="text"
        className={s.input}
        placeholder="Search"
      />
      <button onClick={handleClick}>Search</button>
    </>
  );
};

export default SearchBar;

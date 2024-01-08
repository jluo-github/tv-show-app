import React, { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  };

  const handleClick = (e) => {
    if (e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        onKeyUp={handleSubmit}
        onChange={handleChange}
        type="text"
        className={s.input}
        placeholder="Search "
        value={value}
      />

      {/* <button onClick={handleClick} className={s.btn}>
        Search
      </button> */}
    </>
  );
};

export default SearchBar;

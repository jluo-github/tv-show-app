import React from "react";
import s from "./style.module.css";
import { SMALL_BACKDROP_BASE_URL } from "../../config";

const MAX_TITLE_LENGTH = 30;

const TVShowListItem = ({ tvShow, onClick }) => {
  const onClick_ = () => {
    onClick(tvShow);
  };

  return (
    <div className={s.container} onClick={onClick_}>
      <img
        src={SMALL_BACKDROP_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
        className={s.img}
      />

      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_LENGTH
          ? tvShow.name.slice(0, MAX_TITLE_LENGTH) + "..."
          : tvShow.name}
      </div>
    </div>
  );
};

export default TVShowListItem;

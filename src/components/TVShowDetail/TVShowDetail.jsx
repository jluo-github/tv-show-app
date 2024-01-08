import React from "react";
import s from "./style.module.css";
import FiveStarRating from "../FiveStarRating/FiveStarRating";

const TVShowDetail = ({ tvShow }) => {
  const { name, overview, vote_average, vote_count } = tvShow;
  const rating = vote_average / 2;

  return (
    <div>
      <div className={s.title}>{name}</div>

      <div className={s.rating_container}>
        <FiveStarRating rating={rating} />

        <span className={s.rating}>{rating}/5</span>
      </div>

      <div className={s.overview}>{overview}</div>
    </div>
  );
};

export default TVShowDetail;

import React from "react";
import s from "./style.module.css";
import TVShowListItem from "../TVShowListItem/TVShowListItem";

const TVShowList = ({ tvShowList, onClickItem }) => {
  return (
    <div>
      <div className={s.title}>You may like: </div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={s.tv_show_item}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TVShowList;

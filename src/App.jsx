import React, { useState, useEffect } from "react";
import s from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
// import { BACKDROP_BASE_URL, baseUrl } from "./config";
import logoImage from "./assets/images/logo.png";

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

const App = () => {
  const [currentTVShow, setCurrentTVShow] = useState();

  const fetchPopular = async () => {
    const popularTVShowList = await TVShowAPI.fetchPopular();

    if (popularTVShowList.length > 0) setCurrentTVShow(popularTVShowList[0]);
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  console.log("currentTVshow" + currentTVShow);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center/cover`
          : "pink",
      }}>
      <div className={s.header}>
        header
        <div className="row">
          <div className="col-4">
            <Logo img={logoImage} title="title !" subtitle={"subtitle !"} />
          </div>
          <div className="col-md-12 col-lg-6">
            <input style={{ width: 100 }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>Recommended V shows</div>
    </div>
  );
};

export default App;

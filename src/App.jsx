import React, { useState, useEffect } from "react";
import s from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
// import { BACKDROP_BASE_URL, baseUrl } from "./config";
import logoImage from "./assets/images/logo.png";
import TVShowListItem from "./components/TVShowListItem/TVShowListItem";
import TVShowList from "./components/TVShowList/TVShowList";
import SearchBar from "./components/SearchBar/SearchBar";

const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

const App = () => {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  const fetchPopular = async () => {
    try {
      const popularTVShowList = await TVShowAPI.fetchPopular();
      if (popularTVShowList.length > 0) setCurrentTVShow(popularTVShowList[0]);
    } catch (err) {
      console.log("Something went wrong when fetching TV shows");
    }
  };

  const fetchRecommendations = async (tvShowId) => {
    try {
      const recommendationListResp = await TVShowAPI.fetchRecommendations(
        tvShowId
      );
      if (recommendationListResp.length > 0)
        setRecommendationList(recommendationListResp.slice(0, 10));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchByTitle = async (title) => {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(title);
      if (searchResponse.length > 0) setCurrentTVShow(searchResponse[0]);
    } catch (err) {
      console.log("Something went wrong when search the TV show");
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  const updateCurrentTVShow = (tvShow) => {
    setCurrentTVShow(tvShow);
  };

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
            <Logo
              title="TVShows"
              subtitle="Find something you like"
              img={logoImage}
            />
          </div>

          <div className="col-md-12 col-lg-6">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>

      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>

      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <TVShowList
            onClickItem={updateCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
};

export default App;

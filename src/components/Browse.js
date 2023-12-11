import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const nowPlayingMovie = useNowPlayingMovies();

  return (
    <div>
      <Header  />
      <MainContainer/>
      <SecondaryContainer/>
      {/* {
        nowPlayingMovie.map((movie) => {
          <div>{movie.original_title}</div>
        })
      } */}
    </div>
  );
};

export default Browse;

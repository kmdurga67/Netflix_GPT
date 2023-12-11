import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";

const Browse = () => {
  const nowPlayingMovie = useNowPlayingMovies();

  return (
    <div>
      <Header  />
    </div>
  );
};

export default Browse;

import React from "react";
import MovieList from "./movies/MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
  return (
   <div className="bg-black">
     <div className="mt-0 md:-mt-[15%] relative z-20 pl-4 pr-4 md:pl-12 md:pr-12">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
    </div>
   </div>
  );
};

export default SecondaryContainer;

import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-white pb-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies
            ? movies.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

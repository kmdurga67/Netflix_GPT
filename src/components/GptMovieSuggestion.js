import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movie, index) => (
          <>
            <h1>{movie}</h1>
            <MovieList key={movie} title={movie} movies={movieResults[index]} />
          </>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;

import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/openai";
import { API_OPTIONS } from "../../utils/constants";
import { addGptMovieResult } from "../../store/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchTxt = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json =await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // const getQuery =
    //   "Act as a Movie Recommendation system & suggest some movie for the query:" +
    //   searchTxt.current.value +
    //   "only give me names of 5 movies, comma seperated like the example example result given ahead. Example Result: Gadar, Sholey, Dunki, Animal, DDLJ";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: getQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // if (!gptResults.choices) {
    //   //handle error
    // }

    const gptResult =  "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan, Dilwale Dulhania Le Jayenge, Kuch Kuch Hota Hai, Jab Tak Hai Jaan, Hum Dil De Chuke Sanam, Kabhi Khushi Kabhie Gham, Kal Ho Naa Ho, Veer-Zaara, Dil To Pagal Hai, Mohabbatein, Jabariya Jodi, Yeh Jawaani Hai Deewani, Rab Ne Bana Di Jodi, Ae Dil Hai Mushkil, Main Hoon Na, Barfi!, Raaz, 1920, Alone, Raaz: The Mystery Continues, Haunted - 3D, Ek Thi Daayan, Creature 3D, Dobaara: See Your Evil, Stree ";
    const gptMovies = gptResult.split(", ");
    const gptResults = gptResult.split(",");
    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieNames: gptResults, movieResults: tmdbResults}));
  };

  return (
    <div className="pt-[30%] md:pt-[8%] flex justify-center">
      <form
        className="w-full bg-black md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
          ref={searchTxt}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

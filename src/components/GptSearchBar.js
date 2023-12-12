import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchTxt = useRef(null);

  const handleGptSearchClick = async () => {
    const getQuery = "Act as a Movie Recommendation system & suggest some movie for the query:" + searchTxt.current.value + "only give me names of 5 movies, comma seperated like the example example result given ahead. Example Result: Gadar, Sholey, Dunki, Animal, DDLJ";
    const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: getQuery }],
          model: 'gpt-3.5-turbo',
        });
      
    console.log(searchTxt.current.value);
    console.log(gptResults.choices)
  }

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
          ref={searchTxt}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3" onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

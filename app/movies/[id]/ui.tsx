"use client";

import { setDibs } from "actions/movieAction";
import { useState } from "react";

export default function UI({ movie }) {
  const [dibsOn, setDibsOn] = useState(movie.dibs_on || false);

  const toggleDibs = async () => {
    const newDibsOn = !dibsOn;
    setDibsOn(newDibsOn);

    try {
      await setDibs(movie.id, newDibsOn);
    } catch (error) {
      setDibsOn(!newDibsOn);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center">
      <img src={movie.image_url} className="w-1/3" />

      <div className="md:w-2/3 w-full flex flex-col items-center md:items-start p-6 gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          {/* 찜하기 버튼 */}
          <button
            onClick={toggleDibs}
            className="text-lg px-3 py-1 bg-gray-700 rounded-lg flex items-center gap-2 text-white"
          >
            찜하기 {dibsOn ? "❤️" : "🤍"}
          </button>
        </div>
        <p className="text-lg font-medium">{movie.overview}</p>
        <div className="font-blod text-lg">
          <i className="fas fa-star mr-1" />
          Vote Average: {movie.vote_average}
        </div>
        <div className="font-blod text-lg">Popularity: {movie.popularity}</div>
        <div className="font-blod text-lg">
          Release Date: {movie.release_date}
        </div>
      </div>
    </div>
  );
}

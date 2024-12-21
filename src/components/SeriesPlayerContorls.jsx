"use client";

import React, { useState } from "react";
const SeriesPlayerContorls = ({ id }) => {
    const [seasonEpisode, setSeasonEpisode] = useState({ Season: 1, Episode: 1 });

    return (
      <div>
        <iframe
          className="w-full h-60 my-1 md:min-h-[450px] mx-auto"
          src={`https://autoembed.co/tv/tmdb/${id}-${seasonEpisode.Season}-${seasonEpisode.Episode}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="md:flex justify-evenly mt-3">
          {/* Season Controls */}
          <div className="m-1">
            <button
              className="px-2 py-1 bg-green-500 text-black mx-1 rounded-md"
              onClick={() =>
                setSeasonEpisode((prev) => ({
                  ...prev,
                  Season: Math.max(1, prev.Season - 1),
                }))
              }
            >
              -1
            </button>
            <label className="mx-1">Season</label>
            <input
              type="number"
              name="Season"
              value={seasonEpisode.Season}
              className="text-black px-2 py-1 w-14 outline-none"
              onChange={(e) =>
                setSeasonEpisode((prev) => ({
                  ...prev,
                  Season: Number(e.target.value),
                }))
              }
            />
            <button
              className="px-2 py-1 bg-green-500 text-black mx-1 rounded-md"
              onClick={() =>
                setSeasonEpisode((prev) => ({
                  ...prev,
                  Season: prev.Season + 1,
                }))
              }
            >
              +1
            </button>
          </div>
          {/* Episode Controls */}
          <div className="m-1">
            <button
              className="px-2 py-1 bg-green-500 text-black mx-1 rounded-md"
              onClick={() =>
                setSeasonEpisode((prev) => ({
                  ...prev,
                  Episode: Math.max(1, prev.Episode - 1),
                }))
              }
            >
              -1
            </button>
            <label className="mx-1">Episode</label>
            <input
              type="number"
              value={seasonEpisode.Episode}
              className="text-black px-2 py-1 w-14 outline-none"
              onChange={(e) =>
                setSeasonEpisode((prev) => ({
                  ...prev,
                  Episode: Number(e.target.value),
                }))
              }
            />
            <button
              className="px-2 py-1 bg-green-500 text-black mx-1 rounded-md"
              onClick={() =>
                setSeasonEpisode((prev) => ({
                  ...prev,
                  Episode: prev.Episode + 1,
                }))
              }
            >
              +1
            </button>
          </div>
        </div>
      </div>
    );
}

export default SeriesPlayerContorls
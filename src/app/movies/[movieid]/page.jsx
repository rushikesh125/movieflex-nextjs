import React from "react";
import { convertMinutesToHours, fetchMovieInfo, tmdbMovieFindURL } from "@/utils";
import RecommendationSidebar from "@/components/RecommendationSidebar";
const MovieStreamingPage = async ({ params }) => {
  const { movieid } = await params;
  const movieData = await fetchMovieInfo(tmdbMovieFindURL, movieid);
  console.log(movieData);
  return (
    <>
      <div className="md:flex px-1 " id="MoviePlayer">
        <div className=" md:w-2/3 bg-slate-900 py-3 px-1 mx-1 my-3 aspect-video">
          <iframe
            className="w-full h-60 my-1   md:min-h-[450px] mx-auto"
            src={`https://autoembed.co/movie/tmdb/${movieid}`}
            allowFullScreen
          ></iframe>
          <hr />
          <div className="px-2 py-2">
            <h1 className="text-xl">{movieData.title}</h1>
            <div className="flex justify-evenly text-xs text-slate-300 py-3">
              <p>{movieData?.original_language?.toUpperCase()}</p>
              <p>{movieData?.vote_average} </p>
              <p>
                {new Date(
                  movieData?.release_date || movieData.first_air_date
                ).getFullYear()}
              </p>
              <p>{convertMinutesToHours(movieData?.runtime)}</p>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            OVERVIEW :-&nbsp;{movieData?.overview}
          </p>
        </div>
        <div className="md:w-1/3 bg-slate-900 py-3 px-1 mx-1 my-3 md:max-h-screen overflow-y-scroll " >
          <RecommendationSidebar id={movieid} contentType={`movie`}/>
        </div>
      </div>
    </>
  );
};

export default MovieStreamingPage;

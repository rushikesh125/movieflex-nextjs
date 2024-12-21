import RecommendationSidebar from '@/components/RecommendationSidebar';
import SeriesPlayerContorls from '@/components/SeriesPlayerContorls';
import { convertMinutesToHours, fetchMovieInfo, fetchMovieRecommendation, tmdbSeriesFindURL } from '@/utils';
import React from 'react'

const SeriesStreamingPage = async ({params}) => {
    const {seriesid} = await params;
  const seriesData = await fetchMovieInfo(tmdbSeriesFindURL,seriesid);
//   console.log(res);
//   const seriesData = await res.results;

  if (!seriesData) {
    return (
      <div className="text-center text-red-500">
        <h1>Error loading data. Please try again later.</h1>
      </div>
    );
  }
  return (
    <div className="md:flex px-1" id="MoviePlayer">
        <div className="md:w-2/3 bg-slate-900 py-3 px-1 mx-1 my-3 aspect-video">
          {/* <hr /> */}
          <SeriesPlayerContorls id={seriesid} />
          <div className="px-2 py-2">
            <h1 className="text-xl">{seriesData.title || seriesData.name}</h1>
            <div className="flex justify-evenly text-xs text-slate-300 py-3">
              <p>{seriesData?.original_language?.toUpperCase()}</p>
              <p>{seriesData?.vote_average}</p>
              <p>
                {new Date(
                  seriesData?.release_date || seriesData.first_air_date
                ).getFullYear()}
              </p>
              <p>{convertMinutesToHours(seriesData?.runtime)} min</p>
            </div>
          </div>
          <p className="text-sm text-slate-400">
            OVERVIEW :-&nbsp;{seriesData?.overview}
          </p>
        </div>
        <div className="md:w-1/3 bg-slate-900 py-3 px-1 mx-1 my-3 md:max-h-screen overflow-y-scroll">
          <RecommendationSidebar id={seriesid} contentType={`tv`}/>
        </div>
      </div>
  )
}

export default SeriesStreamingPage
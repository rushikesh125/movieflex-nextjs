export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This makes the scroll smooth
  });
};
export function convertMinutesToHours(minutes) {
  const hours = Math.floor(minutes / 60); // Get whole hours
  const remainingMinutes = minutes % 60; // Get remaining minutes

  // Format the output
  return `${hours} hr ${remainingMinutes} min`; 
}
export const posterImagePath =
  "https://image.tmdb.org/t/p/w300_and_h450_bestv2/";

export const tmdbHomeURL = "/trending/all/day";
export const tmdbMoviesURL = "/trending/movie/day";
export const tmdbSeriesURL = "/trending/tv/day"
export const tmdbMovieFindURL = "/movie"
export const tmdbSeriesFindURL = "/tv";
// export const tmdbMovieRecommendURL = "/movie"

const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.TMDB_API_KEY,
  },
};

// const res = await fetch(url, options);
// console.log(await res.json());
// utils/fetchMovies.js
export const fetchMovies = async (endpoint, page = 1) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3${endpoint}?&page=${page}&language=en-US`,
      options
    );

    // Check if the response is okay (status 200-299)
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    throw new Error("Failed to fetch movies");
  }
};
export const fetchMovieInfo = async (endpoint,id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3${endpoint}/${id}`,
      options
    );

    // Check if the response is okay (status 200-299)
    if (!response.ok) {
      throw new Error("Failed to fetch Recommended movies ");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    throw new Error("Failed to fetch movies");
  }
};
export const fetchMovieRecommendation = async (contentType,id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${contentType}/${id}/recommendations`,
      options
    );

    // Check if the response is okay (status 200-299)
    if (!response.ok) {
      throw new Error("Failed to fetch movies details");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error.message);
    throw new Error("Failed to fetch movies");
  }
};

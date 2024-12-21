"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import Link from "next/link";

const Search = () => {
  const [searchName, setSearchName] = useState("");
  const [searchFor, setSearchFor] = useState("ALL");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getSearchResult = async (Name, page = 1) => {
    if (!Name.trim()) return;

    try {
      setLoading(true);
      setError(null);
      let searchUrl = "";

      if (searchFor === "SERIES") {
        searchUrl = `/search/tv?query=${encodeURIComponent(Name)}&page=${page}`;
      } else if (searchFor === "MOVIE") {
        searchUrl = `/search/movie?query=${encodeURIComponent(Name)}&page=${page}`;
      } else {
        searchUrl = `/search/multi?query=${encodeURIComponent(Name)}&page=${page}`;
      }

      const response = await fetch(`https://api.themoviedb.org/3${searchUrl}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: process.env.NEXT_PUBLIC_TMDB_API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const result = await response.json();
      setData((prevData) => (page === 1 ? result.results : [...prevData, ...result.results]));
      setTotalPages(result.total_pages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSearchResult(searchName);
  }, [searchFor]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setPage(1);
      getSearchResult(searchName, 1);
    }
  };

  const getToPath = (item) => {
    if (searchFor === "ALL") {
      if (item.media_type === "movie") {
        return `/movies/${item.id}`;
      } else if (item.media_type === "tv") {
        return `/series/${item.id}`;
      }
    } else if (searchFor === "MOVIE") {
      return `/movies/${item.id}`;
    } else if (searchFor === "SERIES") {
      return `/series/${item.id}`;
    }
    return ""; // Default case
  };

  const loadMore = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      setPage(nextPage);
      getSearchResult(searchName, nextPage);
    }
  };

  return (
    <>
      <div className="md:flex md:justify-center p-2">
        <input
          type="text"
          className="w-3/4 text-lg py-1 md:w-5/12 outline-none text-black px-2 rounded-l-3xl"
          value={searchName}
          autoFocus
          onChange={(e) => setSearchName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="p-2 bg-green-500 w-1/4 rounded-r-3xl"
          onClick={() => {
            setPage(1);
            getSearchResult(searchName, 1);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex justify-center">
        <div className="border border-cyan-300">
          <button
            className={`m-1 p-1 ${searchFor === "ALL" ? "bg-cyan-300 text-black" : ""}`}
            onClick={() => setSearchFor("ALL")}
          >
            ALL
          </button>
          <button
            className={`m-1 p-1 ${searchFor === "MOVIE" ? "bg-cyan-300 text-black" : ""}`}
            onClick={() => setSearchFor("MOVIE")}
          >
            MOVIE
          </button>
          <button
            className={`m-1 p-1 ${searchFor === "SERIES" ? "bg-cyan-300 text-black" : ""}`}
            onClick={() => setSearchFor("SERIES")}
          >
            SERIES
          </button>
        </div>
      </div>

      {loading && <div className="text-center py-4">Loading...</div>}
      {error && <div className="text-center text-red-500 py-4">Error: {error}</div>}

      <div className="py-4 md:flex md:flex-wrap md:justify-center">
        {data.length > 0 ? (
          data.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              href={getToPath(item)}
            >
              <Card
                cardData={item}
                media_type={
                  searchFor === "MOVIE"
                    ? "movie"
                    : searchFor === "SERIES"
                    ? "tv"
                    : ""
                }
              />
            </Link>
          ))
        ) : (
          !loading && <div className="text-center">No results found.</div>
        )}
      </div>

      {data.length > 0 && !loading && page < totalPages && (
        <div className="flex justify-center py-4">
          <button
            className="p-2 bg-blue-500 text-white rounded"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Search;

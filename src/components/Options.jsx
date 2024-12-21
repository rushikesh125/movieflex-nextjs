"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchIcon from "./svgs/SearchIcon";

const Options = () => {
  const pathname = usePathname();
  const isBaseUrl = pathname === "/";
  const isMoviesUrl = pathname === "/movies";
  const isSeriesUrl = pathname === "/series";
  const isSearchUrl = pathname === "/search";

  return (
    <div className="flex w-full mx-auto  justify-center">
      <Link
        href="/"
        className={` flex justify-center items-center p-2 text-center ${
          isBaseUrl
            ? "text-black bg-cyan-500 border-t-2 border-r-2 border-cyan-500"
            : "border-b-2 border-cyan-500"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house-fill block"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
        </svg>
      </Link>
      <Link
        href="/movies"
        className={` p-2 text-center ${
          isMoviesUrl
            ? "text-black bg-cyan-500 border-t-2 border-r-2 border-cyan-500"
            : "border-b-2 border-cyan-500"
        }`}
      >
        MOVIES
      </Link>
      <Link
        href="/series"
        className={` p-2 text-center ${
          isSeriesUrl
            ? "text-black bg-cyan-500 border-t-2 border-l-2 border-cyan-500"
            : "border-b-2 border-cyan-500"
        }`}
      >
        WEB SERIES
      </Link>
      <Link
        href="/search"
        className={` p-2 text-center ${
          isSearchUrl
            ? "text-black bg-cyan-500 border-t-2 border-l-2 border-cyan-500"
            : "border-b-2 border-cyan-500"
        }`}
      >
        <SearchIcon/>
      </Link>
    </div>
  );
};

export default Options;

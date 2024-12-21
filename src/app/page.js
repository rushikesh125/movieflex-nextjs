// app/home/page.jsx
import CardShimmer from "@/components/CardShimmer";
import Image from "next/image";
import Link from "next/link";
import { scrollToTop } from "@/utils";
import { fetchMovies, tmdbHomeURL } from "@/utils";
import Card from "@/components/Card";
import Options from "@/components/Options";

export default async function Home({ searchParams }) {
  // Get page parameter from searchParams and default to 1 if not provided
  const { page = 1 } = await searchParams;
  
  // Fetch movies based on the current page
  const data = await fetchMovies('/trending/all/day', page);

  // Parse page from searchParams and ensure it's a valid number
  const currentPage = parseInt(page, 10);
  
  // Calculate total pages (based on the response data)
  const totalPages = data.total_pages;

  return (
    <div className="px-2 py-4">
      <Options/>
      <h1 className="text-xl py-2 border-b-2 border-cyan-300 inline-block">
        Trending Movies and Shows
      </h1>
      <div className="py-4 md:flex md:flex-wrap md:justify-center">
        {data.results.map((item, index) => (
          <Link key={`${item.id}-${index}`} href={item.media_type === "movie" ? `/movies/${item.id}` : (item.media_type === "tv" ? `/series/${item.id}` : "")}>
            <Card cardData={item} />
          </Link>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center w-1/2 md:w-3/12 mx-auto items-center  ">
        {/* Previous Button */}
        {currentPage > 1 && (
          <Link href={`/?page=${currentPage - 1}`} className="mx-auto bg-green-500 hover:bg-green-700 text-black px-4 py-2">
            Previous
          </Link>
        )}
        <div className="w-fit ">{currentPage}</div>
        {/* Next Button */}
        {currentPage < totalPages && (
          <Link href={`/?page=${currentPage + 1}`} className="mx-auto bg-green-500 hover:bg-green-700 text-black px-4 py-2">
            Next
          </Link>
        )}
      </div>
    </div>
  );
}

import { posterImagePath } from "@/utils";

const Card = (props) => {
  const { cardData } = props;
  const {
    poster_path,
    title,
    name,
    media_type,
    original_language,
    release_date,
    first_air_date,
    overview,
    vote_average,
  } = cardData;
  return (
    <div className="flex drop-shadow-2xl bg-black bg-opacity-30 backdrop-filter backdrop-blur-md  my-4 md:mx-5 md:max-w-96">
      <div className="w-1/3 overflow-hidden">
        <img
          src={posterImagePath + poster_path}
          alt="poster"
          className="hover:scale-[1.3] transition-all duration-300 ease-in-out"
        />
      </div>
      <div className="w-2/3 px-2">
        <h2 className="text-lg text-white">{title || name}</h2>
        <div className="flex justify-evenly text-xs text-slate-300 py-3">
          <p>
            {props?.media_type == "tv"
              ? "Series"
              : media_type == "tv"
              ? "Series"
              : "Movie"}
          </p>
          <p>{original_language?.toUpperCase()}</p>
          <p>{new Date(release_date || first_air_date).getFullYear() || ""}</p>
        </div>
        <p className="text-xs text-slate-300">
          {overview?.substring(0, 160) + "..."}
        </p>
        <p className="bg-green-500  px-1  text-black mt-1 flex items-center w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill "
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
           {vote_average}
        </p>
      </div>
    </div>
  );
};

export default Card;

import Image from "next/image";
import { Movie } from "../../typings";

interface Props {
  movie: Movie;
}

// yt video stops at 1.56.00 hrs

const Thumbnail = ({ movie }: Props) => {
  console.log(movie);

  return (
    <div className="relative outer-main-div h-28 rounded-md overflow-hidden min-w-[150px] cursor-pointer  transition duration-200 ease-out md:h-52 md:min-w-[300px] md:hover:scale-105 hover:-translate-y-2">
      <Image
        className="h-full w-full absolute"
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        layout="fill"
        alt=""
      />
      <div className="bg-[#00000081] inner-div h-full w-full top-0 left-0  absolute translate-y-0 p-2 md:p-6  ease-in-out transition-all duration-300">
        <p className="font-bold text-red-700 text-shadow-xl text-xs md:text-lg md:mt-4 mt-2">
          {movie?.title || movie?.name || movie?.original_name}
        </p>
        <p className="text-xs md:text-base text-shadow-md">
          Rating : {movie?.vote_average}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;

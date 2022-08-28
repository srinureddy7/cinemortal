import { Star } from "@mui/icons-material";
import { Rating } from "@mui/material";
import Image from "next/image";
// import { Movie } from "../../typings";

interface Props {
  movie: any;
}

// yt video stops at 1.56.00 hrs

const Thumbnail = ({ movie }: Props) => {
  console.log(movie);

  return (
    <div className="relative outer-main-div h-52 rounded-md overflow-hidden min-w-[150px] cursor-pointer  transition duration-200 ease-out md:h-52 md:min-w-[300px] md:hover:scale-105 hover:-translate-y-2">
      <Image
        className="h-full w-full absolute"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        layout="fill"
        alt=""
      />
      <div className="bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 inner-div h-full w-full top-0 left-0  absolute translate-y-[130px] p-2 md:p-6  ease-in-out transition-all duration-300">
        <p className="font-bold text-red-700 text-shadow-xl text-xs md:text-lg md:mt-4 mt-2">
          {movie?.title || movie?.name || movie?.original_name}
        </p>
        <span className="flex flex-row items-center text-white justify-between mt-2">
          <Rating
            className="!text-sm !md:text-base"
            name="read-only"
            emptyIcon={
              <Star
                className="text-gray-500  !text-sm !md:text-base"
                fontSize="inherit"
              />
            }
            precision={0.5}
            value={movie?.vote_average / 2}
            readOnly
          />
          <span className="text-sm">
            {new Date(movie?.release_date).getFullYear()}
          </span>
        </span>
        <div className="text-white text-sm mt-4">
          {movie?.overview?.substring(0, 75)}
          <p className="text-xs leading-4">...read more</p>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;

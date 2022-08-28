import { Movie } from "../../typings";
import { KeyboardArrowLeft, ChevronRight } from "@mui/icons-material";
import Thumbnail from "./Thumbnail";
import { useRef, useState } from "react";

interface Props {
  title: string;
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  // var d = new Date("2011-02-02T08:00:00Z");
  // alert(d.getFullYear());
  return (
    <div className=" space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <KeyboardArrowLeft
          onClick={() => handleClick("left")}
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125 ${
            !isMoved && "hidden"
          }`}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-1 no-scrollbar py-2 overflow-x-scroll md:space-x-4 md:py-6 md:px-4"
        >
          {movies.map((item) => (
            <Thumbnail key={item.id} movie={item} />
          ))}
        </div>
        <ChevronRight
          onClick={() => handleClick("right")}
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 hover:scale-125"
        />
      </div>
    </div>
  );
};

export default Row;

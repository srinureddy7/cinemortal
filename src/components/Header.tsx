import { useEffect, useState } from "react";
import { Search, Notifications } from "@mui/icons-material";
import Link from "next/link";
import { AVATAR } from "../assets/icons";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled &&
        "bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20"
      }`}
    >
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link href="/">
          <p className="text-[#E50914] text-2xl font-bold">CINEMORTAL</p>
        </Link>
        <ul className="hidden md:flex space-x-4">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex space-x-4 items-center text-sm font-light">
        <Search className="hidden md:block" />
        <p className="hidden md:block">Kids</p>
        <Notifications />
        <Link href="/account">
          <div className="h-8 w-8">
            <img
              className="h-full w-full cursor-pointer"
              src={AVATAR.src}
              alt=""
            />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

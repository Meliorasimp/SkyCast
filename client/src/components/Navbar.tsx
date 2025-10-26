import "../styles/index.css";
import { Link } from "react-router-dom";
import { navbarData } from "../data/navbarData";
const Navbar = () => {
  return (
    <div className="w-full p-4 grid grid-cols-3 items-center landing-page-navbar-bg">
      <div className="flex items-center gap-2 h-8 justify-self-start">
        <img
          src="/src/assets/sunny.png"
          alt="Sun Icon"
          className="h-full object-contain"
        />
        <Link
          className="text-2xl landing-page-navbar-text font-bold leading-none"
          to="/"
        >
          SkyCast
        </Link>
      </div>
      <div className="landing-page-navbar-text text-xl flex flex-row gap-x-3 sm:gap-x-6 md:gap-x-8 items-center justify-self-center">
        {navbarData.map((data, index) => (
          <Link
            key={index}
            className="relative px-3 py-2 rounded-lg text-sm sm:text-base md:text-xl transition-all duration-300 hover:text-white hover:bg-white/10 hover:scale-105"
            to={data.destination}
          >
            {data.name}
          </Link>
        ))}
      </div>
      <div className="flex justify-self-end cursor-pointer text-sm sm:text-base md:text-xl transition-all duration-300 landing-page-navbar-text px-3 py-2 rounded-lg hover:bg-white/10 hover:scale-105">
        ⚙️ Settings
      </div>
    </div>
  );
};

export default Navbar;

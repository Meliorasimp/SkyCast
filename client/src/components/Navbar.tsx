import "../styles/index.css";
import { Link } from "react-router-dom";
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
        <Link
          className="relative px-3 py-2 rounded-lg text-sm sm:text-base md:text-xl transition-all duration-300 hover:text-white hover:bg-white/10 hover:scale-105"
          to="/dashboard"
        >
          🌤️ Forecast
        </Link>
        <Link
          className="relative px-3 py-2 rounded-lg text-sm sm:text-base md:text-xl transition-all duration-300 hover:text-white hover:bg-white/10 hover:scale-105"
          to="/airquality"
        >
          💨 Air Quality
        </Link>
        <Link
          className="relative px-3 py-2 rounded-lg text-sm sm:text-base md:text-xl transition-all duration-300 hover:text-white hover:bg-white/10 hover:scale-105"
          to="/astronomy"
        >
          🌙 Astronomy
        </Link>
        <Link
          className="relative px-3 py-2 rounded-lg text-sm sm:text-base md:text-xl transition-all duration-300 hover:text-white hover:bg-white/10 hover:scale-105"
          to="/maps"
        >
          🗺️ Maps
        </Link>
        <Link
          className="relative px-3 py-2 rounded-lg text-sm sm:text-base md:text-xl transition-all duration-300 hover:text-white hover:bg-white/10 hover:scale-105"
          to="/marineweather"
        >
          🌊 Marine
        </Link>
      </div>
      <h1 className="landing-page-navbar-text text-xl cursor-pointer justify-self-end">
        Settings
      </h1>
    </div>
  );
};

export default Navbar;

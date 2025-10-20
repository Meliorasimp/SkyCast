import "../styles/index.css";
const Landingpagenavbar = () => {
  return (
    <div className="w-full p-4 grid grid-cols-3 items-center landing-page-navbar-bg">
      <div className="flex items-center gap-2 h-8 justify-self-start">
        <img
          src="/src/assets/sunny.png"
          alt="Sun Icon"
          className="h-full object-contain"
        />
        <h1 className="text-2xl landing-page-navbar-text font-bold leading-none">
          SkyCast
        </h1>
      </div>

      <div className="landing-page-navbar-text text-xl flex flex-row gap-x-4 sm:gap-x-8 md:gap-x-14 items-center justify-self-center">
        <h1 className="cursor-pointer text-sm sm:text-base md:text-xl">Home</h1>
        <h1 className="cursor-pointer text-sm sm:text-base md:text-xl">
          About
        </h1>
        <h1 className="cursor-pointer text-sm sm:text-base md:text-xl">
          Contact
        </h1>
      </div>

      <h1 className="landing-page-navbar-text text-xl cursor-pointer justify-self-end">
        Sign-in
      </h1>
    </div>
  );
};

export default Landingpagenavbar;

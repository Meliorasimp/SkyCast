import "../styles/index.css";
import Landingpagenavbar from "../components/Landingpagenavbar";
import Meterology from "../assets/meteorology.png";
import Wind from "../assets/wind.png";
import Moon from "../assets/moon.png";
import Stars from "../components/Stars";
import Destination from "../assets/destination.png";
import MarineWeather from "../assets/MarineWeather.png";
import Warning from "../assets/warning.png";
const Landingpage = () => {
  return (
    <div className="landing-page-gradient-bg min-h-screen relative">
      <Stars />
      <Landingpagenavbar />
      <div className="w-full h-[90vh] flex flex-col justify-center items-center gap-y-12">
        <section className=" flex flex-col justify-center items-center gap-y-6">
          <h1 className="text-5xl landing-page-text-gradient-heading">
            Check The Weather, Explore Forecast
          </h1>
          <h3 className="text-2xl landing-page-text-gradient-heading text-white text-center w-2/3">
            Stay prepared anywhere on Earth — real-time forecasts, air quality,
            and alerts at your fingertips.
          </h3>
          <button className="rounded-full button-primary w-1/4 h-14 text-xl font-semibold hover:scale-105 transition-transform duration-300">
            Try it now
          </button>
        </section>
      </div>
      <div className="w-full h-[95vh] flex items-center flex-col gap-y-12 ">
        <h1 className="landing-page-text-gradient-heading text-4xl font-extrabold">
          All the weather info you need in one place
        </h1>
        <section className="w-5/6 flex flex-wrap items-center justify-between h-4/5 gap-y-8">
          <div className="w-2/7 h-1/2 rounded-2xl glass-morphism-animated flex flex-col gap-y-4 justify-center items-center">
            <div className="flex justify-between flex-col items-center gap-y-4">
              <img src={Meterology} alt="Meteorology" className="w-16 h-16" />
              <h1 className="text-xl font-bold">Real-time Forecast</h1>
            </div>
            <p className="text-center w-5/6">
              Get the latest weather updates and forecasts using Trusted APIs
            </p>
          </div>
          <div className="w-2/7 h-1/2 rounded-2xl glass-morphism-animated flex flex-col gap-y-4 justify-center items-center">
            <div className="flex justify-between flex-col items-center gap-y-4">
              <img src={Wind} alt="Wind" className="w-16 h-16" />
              <h1 className="text-xl font-bold">Air Quality</h1>
            </div>
            <p className="text-center w-5/6">
              Monitor air pollution levels to protect your health and well-being
            </p>
          </div>
          <div className="w-2/7 h-1/2 rounded-2xl glass-morphism-animated flex flex-col gap-y-4 justify-center items-center">
            <div className="flex justify-between flex-col items-center gap-y-4">
              <img src={Moon} alt="Wind" className="w-16 h-16" />
              <h1 className="text-xl font-bold">Astronomy</h1>
            </div>
            <p className="text-center w-5/6">
              Explore celestial events and moon phases for stargazing
              enthusiasts
            </p>
          </div>
          <div className="w-2/7 h-1/2 rounded-2xl glass-morphism-animated flex flex-col gap-y-4 justify-center items-center">
            <div className="flex justify-between flex-col items-center gap-y-4">
              <img src={Destination} alt="Destination" className="w-16 h-16" />
              <h1 className="text-xl font-bold">Geolocation</h1>
            </div>
            <p className="text-center w-5/6">
              Access your location-based weather data for accurate forecasts
            </p>
          </div>
          <div className="w-2/7 h-1/2 rounded-2xl glass-morphism-animated flex flex-col gap-y-4 justify-center items-center">
            <div className="flex justify-between flex-col items-center gap-y-4">
              <img
                src={MarineWeather}
                alt="Destination"
                className="w-16 h-16"
              />
              <h1 className="text-xl font-bold">Marine Weather</h1>
            </div>
            <p className="text-center w-5/6">
              Get specialized weather forecasts for marine and coastal areas
            </p>
          </div>
          <div className="w-2/7 h-1/2 rounded-2xl glass-morphism-animated flex flex-col gap-y-4 justify-center items-center">
            <div className="flex justify-between flex-col items-center gap-y-4">
              <img src={Warning} alt="Destination" className="w-16 h-16" />
              <h1 className="text-xl font-bold">Alerts</h1>
            </div>
            <p className="text-center w-5/6">
              Stay informed about severe weather alerts and warnings in your
              area
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landingpage;

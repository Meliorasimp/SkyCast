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
  const WeatherInfoData = [
    {
      name: "Real-time Forecast",
      description:
        "Get the latest weather updates and forecasts using Trusted APIs",
      icon: Meterology,
      alticon: "Meteorology Icon",
    },
    {
      name: "Air Quality",
      description:
        "Monitor air pollution levels to protect your health and well-being",
      icon: Wind,
      alticon: "Wind Icon",
    },
    {
      name: "Astronomy",
      description:
        "Explore celestial events and moon phases for stargazing enthusiasts",
      icon: Moon,
      alticon: "Moon Icon",
    },
    {
      name: "Geolocation",
      description:
        "Access your location-based weather data for accurate forecasts",
      icon: Destination,
      alticon: "Destination Icon",
    },
    {
      name: "Marine Weather",
      description:
        "Get specialized weather forecasts for marine and coastal areas",
      icon: MarineWeather,
      alticon: "Marine Weather Icon",
    },
    {
      name: "Alerts",
      description:
        "Stay informed about severe weather alerts and warnings in your area",
      icon: Warning,
      alticon: "Warning Icon",
    },
  ];
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
          {WeatherInfoData.map((info, index) => (
            <div
              key={index}
              className="w-2/7 h-1/2 rounded-2xl glass-morphism-animated flex flex-col gap-y-4 justify-center items-center"
            >
              <div className="flex justify-between flex-col items-center gap-y-4">
                <img src={info.icon} alt={info.alticon} className="w-16 h-16" />
                <h1 className="text-xl font-bold">{info.name}</h1>
              </div>
              <p className="text-center w-5/6">{info.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Landingpage;

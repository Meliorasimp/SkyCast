import "../styles/index.css";
import Navbar from "../components/Navbar";
import {
  setGeoLocation,
  setLoading,
  setError,
} from "../store/slices/geoLocationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import type { RootState, AppDispatch } from "../store";
import { convertToCelsius } from "../utils/index";
import Humidity from "../assets/humidity.png";
import Thermometer from "../assets/thermometer.png";
import Cold from "../assets/cold.png";
import WindInfo from "../assets/windinfo.png";
import SunInfo from "../assets/suninfo.png";
import Cloudy from "../assets/cloudy.png";
import { convertToHourandMinute } from "../utils/index";
import { fetchForecast } from "../store/slices/forecastSlice";
import { fetchFiveDayForecast } from "../store/slices/fivedayForecastSlice";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const forecastData = useSelector((state: RootState) => state.forecast);
  const fiveDayForecastData = useSelector(
    (state: RootState) => state.fivedayForecast
  );
  const dateToday = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" } as const;
  const formattedDate = dateToday.toLocaleDateString(undefined, options);
  const formattedDay = dateToday.toLocaleDateString(undefined, {
    weekday: "long",
  } as const);

  const fiveDayForecast = fiveDayForecastData.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  useEffect(() => {
    dispatch(setLoading(true));

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          dispatch(setGeoLocation({ lat, lon }));
          dispatch(setLoading(false));

          // Fetch forecast data after getting location
          dispatch(fetchForecast({ lat, lon }));
          dispatch(fetchFiveDayForecast({ lat, lon }));
        },
        (error) => {
          console.error("Error getting location:", error);
          dispatch(
            setError(
              "Unable to get your location. Please enable location services."
            )
          );
          dispatch(setLoading(false));
        }
      );
    } else {
      dispatch(setError("Geolocation is not supported by this browser."));
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  return (
    <div className="dashboard-bg min-h-screen relative w-full">
      <Navbar />
      <div className="text-white text-xl p-4 mt-6 w-4/5 rounded-lg mx-auto flex flex-row gap-x-8">
        {forecastData.loading ||
          (fiveDayForecastData.loading && (
            <div className=" flex justify-center items-center w-full text-center text-2xl font-semibold">
              Loading weather data...
            </div>
          ))}
        {forecastData.error ||
          (fiveDayForecastData.error && (
            <div className="text-center w-full text-2xl font-semibold text-red-500">
              {forecastData.error || fiveDayForecastData.error}
            </div>
          ))}
        {!forecastData.loading &&
          !fiveDayForecastData.loading &&
          !forecastData.error &&
          !fiveDayForecastData.error && (
            <>
              <section className="w-2/3">
                <div className=" flex flex-col gap-y-4 px-10">
                  <h1 className="text-5xl font-bold">
                    {forecastData.name}, {forecastData.sys.country}
                  </h1>
                  <h2 className="text-2xl">
                    {formattedDay} {formattedDate}
                  </h2>
                </div>
                <div className="mt-4 flex flex-row gap-x-2 items-center rounded-lg px-10">
                  <div className="w-1/2">
                    <h1 className="text-5xl font-bold">
                      {convertToCelsius(forecastData.main.temp)}°C
                    </h1>
                    <h2 className="mt-4 text-2xl font-light">
                      Feels like{" "}
                      {convertToCelsius(forecastData.main.feels_like)}°C
                    </h2>
                  </div>
                  <div className="w-1/2 flex flex-col items-start gap-y-4">
                    <h1 className="text-xl font-extralight flex items-center gap-2 ml-2">
                      <img src={Humidity} alt="Humidity" className="w-8 h-8" />
                      Humidity: {forecastData.main.humidity}%
                    </h1>
                    <h1 className="text-xl font-extralight flex items-center gap-2">
                      <img
                        src={Thermometer}
                        alt="Max Temp"
                        className="w-8 h-8"
                      />
                      Max Temp: {convertToCelsius(forecastData.main.temp_max)}°C
                    </h1>
                    <h1 className="text-xl font-extralight flex items-center gap-2 ml-2">
                      <img src={Cold} alt="Min Temp" className="w-8 h-8" />
                      Min Temp: {convertToCelsius(forecastData.main.temp_min)}°C
                    </h1>
                  </div>
                </div>
                <div className="dashboard-card p-6 mt-16 rounded-2xl">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-blue-400">📅</span>
                    5-Day Forecast
                  </h2>
                  <div className="grid grid-cols-5 gap-4">
                    {fiveDayForecast.map((item) => {
                      const date = new Date(item.dt * 1000);
                      const dayName = date.toLocaleDateString(undefined, {
                        weekday: "short",
                      });
                      const dayNumber = date.getDate();
                      const month = date.toLocaleDateString(undefined, {
                        month: "short",
                      });

                      return (
                        <div
                          key={item.dt}
                          className="dashboard-gradient-card p-4 text-center hover:scale-105 transition-transform duration-300"
                        >
                          <div className="flex flex-col items-center gap-3">
                            <div className="text-sm font-medium opacity-80">
                              {dayName}
                            </div>
                            <div className="text-lg font-bold">
                              {dayNumber} {month}
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                              {item.weather[0]?.main === "Clear"
                                ? "☀️"
                                : item.weather[0]?.main === "Clouds"
                                ? "☁️"
                                : item.weather[0]?.main === "Rain"
                                ? "🌧️"
                                : "🌤️"}
                            </div>
                            <div className="text-2xl font-bold text-blue-300">
                              {convertToCelsius(item.main.temp)}°
                            </div>
                            <div className="text-xs opacity-70 text-center">
                              {item.weather[0]?.description}
                            </div>
                            <div className="flex justify-between w-full text-xs mt-2">
                              <span className="opacity-60">
                                H: {convertToCelsius(item.main.temp_max)}°
                              </span>
                              <span className="opacity-60">
                                L: {convertToCelsius(item.main.temp_min)}°
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
              <section className="w-1/3 flex flex-col gap-y-6">
                <div className="dashboard-card rounded-2xl p-6">
                  <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                    <img
                      src={WindInfo}
                      alt="Wind Information"
                      className="w-8 h-8"
                    />
                    Wind Information
                  </h2>
                  <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg opacity-80">Speed:</span>
                      <span className="text-lg font-medium">
                        {forecastData.wind.speed} m/s
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg opacity-80">Direction:</span>
                      <span className="text-lg font-medium">
                        {forecastData.wind.deg}°
                      </span>
                    </div>
                  </div>
                </div>

                <div className="dashboard-card rounded-2xl p-6">
                  <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                    <img
                      src={SunInfo}
                      alt="Sun Information"
                      className="w-8 h-8"
                    />
                    Sun Information
                  </h2>
                  <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg opacity-80">Sunrise:</span>
                      <span className="text-lg font-medium">
                        {convertToHourandMinute(forecastData.sys.sunrise)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg opacity-80">Sunset:</span>
                      <span className="text-lg font-medium">
                        {convertToHourandMinute(forecastData.sys.sunset)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="dashboard-card rounded-2xl p-6">
                  <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4">
                    <img src={Cloudy} alt="Cloudy" className="w-8 h-8" />
                    Precipitation
                  </h2>
                  <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg opacity-80">Last 1 Hour:</span>
                      <span className="text-lg font-medium">
                        {forecastData.rain?.["1h"] || 0} mm
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg opacity-80">Last 3 Hours:</span>
                      <span className="text-lg font-medium">
                        {forecastData.rain?.["3h"] || 0} mm
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
      </div>
    </div>
  );
};

export default Dashboard;

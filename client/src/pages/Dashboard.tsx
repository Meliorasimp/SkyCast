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
import { fetchForecast } from "../store/slices/forecastSlice";

const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const forecastData = useSelector((state: RootState) => state.forecast);
  const dateToday = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" } as const;
  const formattedDate = dateToday.toLocaleDateString(undefined, options);

  // Debug log to see the forecast data structure
  console.log("Forecast Data:", forecastData);
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
        <section className="w-2/3">
          <div className=" flex flex-col gap-y-4">
            <h1 className="text-5xl font-bold">
              {forecastData.name}, {forecastData.sys.country}
            </h1>
            <h2 className="text-2xl">{formattedDate}</h2>
          </div>
        </section>
        <div className="w-1/3">World</div>
      </div>
    </div>
  );
};

export default Dashboard;

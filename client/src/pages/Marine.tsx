import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
//import { fetchMarineWeatherData } from "../store/slices/marineWeatherSlice";
import { useEffect } from "react";
import { type AppDispatch } from "../store/index";
import { type RootState } from "../store/index";
const Marine = () => {
  const dispatch = useDispatch<AppDispatch>();
  const lat = useSelector((state: RootState) => state.forecast.coord.lat);
  const lon = useSelector((state: RootState) => state.forecast.coord.lon);
  const marineWeather = useSelector((state: RootState) => state.marineWeather);
  console.log(marineWeather);

  useEffect(() => {
    //dispatch(fetchMarineWeatherData({ lat, lon }));
  }, [dispatch, lat, lon]);
  return (
    <div className="dashboard-bg min-h-screen relative w-full">
      <Navbar />
      <section className="h-[20vh] text-center text-white px-4 py-8">
        <h2 className="text-4xl font-bold text-white mb-2">Marine Weather</h2>
        <p className="text-lg">Marine Weather for your Location</p>
      </section>
    </div>
  );
};

export default Marine;

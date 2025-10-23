import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import type { RootState } from "../store";
import { useEffect } from "react";
import { type AppDispatch } from "../store";
import { fetchMoonPhaseData } from "../store/slices/moonPhaseSlice";

const Astronomy = () => {
  const forecastData = useSelector((state: RootState) => state.forecast);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (forecastData.coord) {
      dispatch(
        fetchMoonPhaseData({
          lat: forecastData.coord.lat,
          lon: forecastData.coord.lon,
        })
      );
    }
  }, [dispatch, forecastData.coord]);
  return (
    <div className="dashboard-bg min-h-screen relative w-full">
      <Navbar />
    </div>
  );
};

export default Astronomy;

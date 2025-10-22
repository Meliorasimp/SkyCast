import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import type { RootState } from "../store";
import CO from "../assets/carbon-monoxide.png";
import NO2 from "../assets/nitrous-oxide.png";
import Ozone from "../assets/ozone.png";
import Sulfur from "../assets/sulfur.png";
import PM10 from "../assets/pm10.png";
import ParticulateMatter from "../assets/particulate-matter.png";
import Ammonia from "../assets/ammonia.png";
import { useEffect } from "react";
import { fetchAirQualityData } from "../store/slices/airQualitySlice";
import type { AppDispatch } from "../store";

const Airquality = () => {
  const dispatch = useDispatch<AppDispatch>();
  const forecastData = useSelector((state: RootState) => state.forecast);
  const dateToday = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" } as const;
  const formattedDate = dateToday.toLocaleDateString(undefined, options);
  const airQualityData = useSelector((state: RootState) => state.airQuality);

  useEffect(() => {
    if (forecastData.coord) {
      dispatch(
        fetchAirQualityData({
          lat: forecastData.coord.lat,
          lon: forecastData.coord.lon,
        })
      );
    }
  }, [dispatch, forecastData.coord]);

  return (
    <div className="dashboard-bg min-h-screen relative w-full">
      <Navbar />
      <div className="w-4/5 mt-8 mx-auto pb-8">
        <section className="dashboard-card flex justify-between items-center rounded-2xl">
          <div className="text-white p-6 flex flex-col gap-y-2">
            <h2 className="text-3xl font-bold">
              {forecastData.name}, {forecastData.sys.country}
            </h2>
            <p className="text-lg">{formattedDate}</p>
          </div>
          <div className="mr-10 text-white text-3xl font-bold flex flex-row items-center gap-x-2">
            <span className="">Air Quality:</span>
            <span className="text-green-600">1</span>
          </div>
        </section>
        <section className="mt-6">
          <div className="h-8 w-full bg-gradient-to-r from-yellow-400 to-red-700 rounded-2xl"></div>
        </section>
        <section className="dashboard-card h-[75vh] mt-6 p-6 rounded-2xl w-full flex flex-wrap gap-x-4 gap-y-10 items-start justify-start">
          <h1 className="text-white text-3xl">Air Pollutants</h1>
          <div className="w-full flex flex-wrap gap-x-4 gap-y-10 items-center justify-center">
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={CO} alt="CO" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold ">
                Carbon Monoxide
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.co} µg/m³
              </p>
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">NO₂</span>
              </div>
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Nitric Oxide
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.no} µg/m³
              </p>
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={NO2} alt="NO₂" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Nitrogen Oxide
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.no2} µg/m³
              </p>
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={Ozone} alt="NO₂" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Ozone
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.o3} µg/m³
              </p>
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={Sulfur} alt="SO₂" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Sulfur Dioxide
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.so2} µg/m³
              </p>
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={ParticulateMatter} alt="PM2_5" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Particulate Matter 2.5
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.pm2_5} µg/m³
              </p>
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={PM10} alt="PM10" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Particulate Matter 10
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.pm10} µg/m³
              </p>
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={Ammonia} alt="NH₃" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Ammonia
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.nh3} µg/m³
              </p>
            </div>
          </div>
        </section>
        <section className="mt-6 mb-8"></section>
      </div>
    </div>
  );
};

export default Airquality;

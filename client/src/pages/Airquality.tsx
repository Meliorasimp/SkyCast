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
          <div className="h-8 w-full bg-gradient-to-r from-yellow-400 to-red-700 rounded-2xl flex items-center justify-between relative px-5">
            <div className="bg-red-900 h-full w-1"></div>
            <div className="bg-red-900 h-full w-1"></div>
            <div className="bg-red-900 h-full w-1"></div>
            <div className="bg-red-900 h-full w-1"></div>
            <div className="bg-red-900 h-full w-1"></div>
            <div className="bg-red-900 h-full w-1"></div>
          </div>
          <div className="flex flex-row text-white text-3xl justify-between mt-2 px-4">
            <h1>0</h1>
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
            <h1>4</h1>
            <h1>5</h1>
          </div>

          <div className="dashboard-card mt-6 p-6 rounded-2xl">
            <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-2xl">ℹ️</span>
              Air Quality Index Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* AQI Scale Info */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">
                  📊 AQI Scale (0-5)
                </h3>
                <div className="space-y-2 text-sm text-white opacity-90">
                  <div className="flex justify-between">
                    <span className="text-green-400">0-1: Good</span>
                    <span>Air quality is excellent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-yellow-400">2: Fair</span>
                    <span>Acceptable air quality</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-400">3: Moderate</span>
                    <span>Moderate health concerns</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-400">4: Poor</span>
                    <span>Unhealthy for sensitive groups</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-purple-400">5: Very Poor</span>
                    <span>Unhealthy for everyone</span>
                  </div>
                </div>
              </div>

              {/* Health Recommendations */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-400">
                  🏥 Health Recommendations
                </h3>
                <div className="space-y-3 text-sm text-white opacity-90">
                  <div>
                    <strong className="text-green-400">Good (0-1):</strong>
                    <p>Perfect for all outdoor activities. Enjoy fresh air!</p>
                  </div>
                  <div>
                    <strong className="text-yellow-400">Fair (2):</strong>
                    <p>
                      Generally acceptable. Sensitive individuals should be
                      cautious.
                    </p>
                  </div>
                  <div>
                    <strong className="text-orange-400">Moderate (3):</strong>
                    <p>
                      Limit prolonged outdoor exposure for sensitive groups.
                    </p>
                  </div>
                  <div>
                    <strong className="text-red-400">Poor (4-5):</strong>
                    <p>Avoid outdoor activities. Use air purifiers indoors.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* General Tips */}
            <div className="mt-6 pt-4 border-t border-white/20">
              <h3 className="text-lg font-semibold mb-3 text-blue-400">
                💡 General Protection Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white opacity-90">
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Check air quality before outdoor activities</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Keep windows closed during poor air quality</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Use air purifiers when AQI is above 3</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Wear masks during high pollution periods</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Stay hydrated and avoid strenuous exercise</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Consider indoor activities when AQI is poor</span>
                </div>
              </div>
            </div>
          </div>
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
              {airQualityData.list[0].components.co < 500 && (
                <p className="text-gray-300 px-4 py-1 text-md mt-4 rounded-full border border-green-500">
                  Safe Level
                </p>
              )}
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
              {airQualityData.list[0].components.no < 50 && (
                <p className="text-gray-300 px-4 py-1 text-md mt-4 rounded-full border border-green-500">
                  Safe Level
                </p>
              )}
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={NO2} alt="NO₂" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Nitrogen Dioxide
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.no2} µg/m³
              </p>
              {airQualityData.list[0].components.no < 50 && (
                <p className="text-gray-300 px-4 py-1 text-md mt-4 rounded-full border border-green-500">
                  Safe Level
                </p>
              )}
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={Ozone} alt="NO₂" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Ozone
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.o3} µg/m³
              </p>
              {airQualityData.list[0].components.o3 < 100 && (
                <p className="text-gray-300 px-4 py-1 text-md mt-4 rounded-full border border-green-500">
                  Safe Level
                </p>
              )}
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={Sulfur} alt="SO₂" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Sulfur Dioxide
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.so2} µg/m³
              </p>
              {airQualityData.list[0].components.so2 < 100 && (
                <p className="text-gray-300 px-4 py-1 text-md mt-4 rounded-full border border-green-500">
                  Safe Level
                </p>
              )}
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={ParticulateMatter} alt="PM2_5" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Particulate Matter 2.5
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.pm2_5} µg/m³
              </p>
              {airQualityData.list[0].components.pm2_5 < 12 && (
                <p className="text-gray-300 px-4 py-1 text-md mt-4 rounded-full border border-green-500">
                  Safe Level
                </p>
              )}
              {airQualityData.list[0].components.pm2_5 >= 12.1 &&
                airQualityData.list[0].components.pm2_5 < 35.5 && (
                  <p className="text-orange-300 px-4 py-1 text-md mt-4 rounded-full border border-green-500">
                    Moderate
                  </p>
                )}
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={PM10} alt="PM10" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Particulate Matter 10
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.pm10} µg/m³
              </p>
              {airQualityData.list[0].components.pm10 < 54 && (
                <p className="text-gray-300 px-4 py-1 text-md mt-4 rounded-full border border-green-500">
                  Safe Level
                </p>
              )}
            </div>
            <div className="w-2/9 flex flex-col items-center justify-center">
              <img src={Ammonia} alt="NH₃" className="w-16 h-16" />
              <h1 className="mt-4 landing-page-text text-lg text-center font-bold">
                Ammonia
              </h1>
              <p className="mt-1 text-green-400 text-xl font-bold">
                {airQualityData.list[0].components.nh3} µg/m³
              </p>
              {airQualityData.list[0].components.nh3 < 200 && (
                <p className="text-gray-300 px-4 py-1 text-md mt-4 rounded-full border border-green-500">
                  Safe Level
                </p>
              )}
            </div>
          </div>
        </section>
        <section className="mt-6 mb-8"></section>
      </div>
    </div>
  );
};

export default Airquality;

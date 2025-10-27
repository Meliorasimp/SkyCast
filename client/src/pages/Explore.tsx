import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { useDispatch } from "react-redux";
import { setSelectedCity } from "../store/slices/exploreSlice";
import { type AppDispatch } from "../store";
import { fetchCityData } from "../store/slices/exploreSlice";
import { useEffect, useRef } from "react";

const Explore = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedCity = useSelector(
    (state: RootState) => state.explore.selectedCity
  );
  const isLoading = useSelector((state: RootState) => state.explore.loading);
  console.log("Selected City from Redux:", selectedCity);
  const cityData = useSelector((state: RootState) => state.exploreData);
  console.log("City Data from Redux:", cityData);

  const weatherSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (
      !cityData.loading &&
      !cityData.error &&
      cityData.name &&
      weatherSectionRef.current
    ) {
      const scrollTimer = setTimeout(() => {
        weatherSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);

      return () => clearTimeout(scrollTimer);
    }
  }, [cityData.loading, cityData.error, cityData.name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchCityData(selectedCity));
    if (!selectedCity) return;
  };

  const cities = [
    //North America
    { value: "New York,US", label: "New York, US" },
    { value: "Toronto,CA", label: "Toronto, Canada" },
    { value: "Mexico City,MX", label: "Mexico City, Mexico" },
    { value: "Havana,CU", label: "Havana, Cuba" },
    { value: "Santo Domingo,DO", label: "Dominican Republic" },
    { value: "Kingston,JM", label: "Kingston, Jamaica" },
    { value: "Guatemala City,GT", label: "Guatemala City, Guatemala" },
    { value: "San José,CR", label: "San José, Costa Rica" },
    { value: "Barcelona,ES", label: "Barcelona, Spain" },
    //South America
    { value: "São Paulo,BR", label: "São Paulo, Brazil" },
    { value: "Buenos Aires,AR", label: "Buenos Aires, Argentina" },
    { value: "Santiago,CL", label: "Santiago, Chile" },
    { value: "Bogotá,CO", label: "Bogotá, Colombia" },
    { value: "Lima,PE", label: "Lima, Peru" },
    { value: "Quito,EC", label: "Quito, Ecuador" },
    { value: "Caracas,VE", label: "Caracas, Venezuela" },
    { value: "Montevideo,UY", label: "Montevideo, Uruguay" },
    { value: "Asunción,PY", label: "Asunción, Paraguay" },
    { value: "La Paz,BO", label: "La Paz, Bolivia" },
    //Europe
    { value: "London,GB", label: "London, UK" },
    { value: "Paris,FR", label: "Paris, France" },
    { value: "Berlin,DE", label: "Berlin, Germany" },
    { value: "Rome,IT", label: "Rome, Italy" },
    { value: "Madrid,ES", label: "Madrid, Spain" },
    { value: "Amsterdam,NL", label: "Amsterdam, Netherlands" },
    { value: "Brussels,BE", label: "Brussels, Belgium" },
    { value: "Zurich,CH", label: "Zurich, Switzerland" },
    { value: "Vienna,AT", label: "Vienna, Austria" },
    { value: "Stockholm,SE", label: "Stockholm, Sweden" },
    { value: "Oslo,NO", label: "Oslo, Norway" },
    { value: "Copenhagen,DK", label: "Copenhagen, Denmark" },
    { value: "Helsinki,FI", label: "Helsinki, Finland" },
    { value: "Dublin,IE", label: "Dublin, Ireland" },
    { value: "Lisbon,PT", label: "Lisbon, Portugal" },
    { value: "Warsaw,PL", label: "Warsaw, Poland" },
    { value: "Athens,GR", label: "Athens, Greece" },
    { value: "Prague,CZ", label: "Prague, Czech Republic" },
    { value: "Budapest,HU", label: "Budapest, Hungary" },
    { value: "Bucharest,RO", label: "Bucharest, Romania" },

    //Asia
    { value: "Beijing,CN", label: "Beijing, China" },
    { value: "Tokyo,JP", label: "Tokyo, Japan" },
    { value: "Seoul,KR", label: "Seoul, South Korea" },
    { value: "New Delhi,IN", label: "New Delhi, India" },
    { value: "Jakarta,ID", label: "Jakarta, Indonesia" },
    { value: "Kuala Lumpur,MY", label: "Kuala Lumpur, Malaysia" },
    { value: "Singapore,SG", label: "Singapore" },
    { value: "Bangkok,TH", label: "Bangkok, Thailand" },
    { value: "Hanoi,VN", label: "Hanoi, Vietnam" },
    { value: "Karachi,PK", label: "Karachi, Pakistan" },
    { value: "Dhaka,BD", label: "Dhaka, Bangladesh" },
    { value: "Riyadh,SA", label: "Riyadh, Saudi Arabia" },
    { value: "Dubai,AE", label: "Dubai, UAE" },
    { value: "Tel Aviv,IL", label: "Tel Aviv, Israel" },
    { value: "Istanbul,TR", label: "Istanbul, Turkey" },
    { value: "Moscow,RU", label: "Moscow, Russia" },
    { value: "Tehran,IR", label: "Tehran, Iran" },
    { value: "Baghdad,IQ", label: "Baghdad, Iraq" },
    { value: "Kathmandu,NP", label: "Kathmandu, Nepal" },
    { value: "Colombo,LK", label: "Colombo, Sri Lanka" },

    //Africa
    { value: "Lagos,NG", label: "Lagos, Nigeria" },
    { value: "Cairo,EG", label: "Cairo, Egypt" },
    { value: "Nairobi,KE", label: "Nairobi, Kenya" },
    { value: "Johannesburg,ZA", label: "Johannesburg, South Africa" },
    { value: "Accra,GH", label: "Accra, Ghana" },
    { value: "Casablanca,MA", label: "Casablanca, Morocco" },
    { value: "Algiers,DZ", label: "Algiers, Algeria" },
    { value: "Tunis,TN", label: "Tunis, Tunisia" },
    { value: "Khartoum,SD", label: "Khartoum, Sudan" },
    { value: "Addis Ababa,ET", label: "Addis Ababa, Ethiopia" },
    { value: "Dakar,SN", label: "Dakar, Senegal" },
    { value: "Abidjan,CI", label: "Abidjan, Ivory Coast" },
    { value: "Douala,CM", label: "Douala, Cameroon" },
    { value: "Kampala,UG", label: "Kampala, Uganda" },
    { value: "Lusaka,ZM", label: "Lusaka, Zambia" },
    { value: "Harare,ZW", label: "Harare, Zimbabwe" },
    { value: "Maputo,MZ", label: "Maputo, Mozambique" },
    { value: "Antananarivo,MG", label: "Antananarivo, Madagascar" },

    //Oceania
    { value: "Sydney,AU", label: "Sydney, Australia" },
    { value: "Melbourne,AU", label: "Melbourne, Australia" },
    { value: "Auckland,NZ", label: "Auckland, New Zealand" },
    { value: "Suva,FJ", label: "Suva, Fiji" },
    { value: "Port Moresby,PG", label: "Port Moresby, Papua New Guinea" },
    { value: "Honolulu,US", label: "Honolulu, Hawaii" },
    { value: "Apia,WS", label: "Apia, Samoa" },
  ];

  return (
    <div className="dashboard-bg min-h-screen relative w-full">
      <Navbar />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <section className="relative flex flex-col gap-y-8 h-[80vh] items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <div className="text-6xl mb-6 animate-bounce">🌍</div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Explore Global Weather
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Discover weather conditions around the world. Select any city to get
            detailed forecasts.
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-6 w-full max-w-md"
        >
          <div className="relative">
            <select
              value={selectedCity}
              onChange={(e) => dispatch(setSelectedCity(e.target.value))}
              className="w-full p-4 text-lg bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 appearance-none cursor-pointer hover:bg-white/15"
              required
            >
              <option value="" disabled className="bg-gray-800 text-gray-300">
                🌆 Select a City
              </option>
              {cities.map((city) => (
                <option
                  key={city.value}
                  value={city.value}
                  className="bg-gray-800 text-white py-2"
                >
                  {city.label}
                </option>
              ))}
            </select>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={!selectedCity || isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              relative overflow-hidden px-8 py-4 text-lg font-semibold rounded-2xl
              transition-all duration-300 transform
              ${
                selectedCity && !isLoading
                  ? "bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:shadow-3xl"
                  : "bg-gray-600/50 text-gray-400 cursor-not-allowed"
              }
              border border-white/20 backdrop-blur-md
            `}
          >
            <div
              className={`
              absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-0 transition-opacity duration-300
              ${selectedCity && !isLoading ? "hover:opacity-100" : ""}
            `}
            ></div>

            <div className="relative flex items-center justify-center space-x-3">
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Fetching Weather...</span>
                </>
              ) : (
                <>
                  <span className="text-xl">🌤️</span>
                  <span>Explore Weather</span>
                </>
              )}
            </div>

            {selectedCity && !isLoading && (
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
              </div>
            )}
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-400 text-center"
          >
            Get real-time weather data, forecasts, and conditions
          </motion.p>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <p className="text-sm text-gray-400 mb-4 text-center">
            Popular destinations:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {cities.slice(0, 5).map((city) => (
              <button
                key={city.value}
                onClick={() => dispatch(setSelectedCity(city.value))}
                className="px-4 py-2 text-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                {city.label}
              </button>
            ))}
          </div>
        </motion.div>
      </section>
      {!cityData.loading && !cityData.error && cityData.name && (
        <motion.section
          ref={weatherSectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-6xl mx-auto px-4 py-16 text-white"
        >
          {/* City Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {cityData.name}
            </h2>
            <p className="text-xl text-gray-300 flex items-center justify-center gap-2">
              <span className="text-2xl">🌍</span>
              {cityData.sys?.country} •{" "}
              {new Date(cityData.dt * 1000).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>

          {/* Main Weather Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 shadow-2xl p-8 mb-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Temperature & Main Info */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <div className="text-8xl">
                    {cityData.weather?.[0]?.main === "Clear" && "☀️"}
                    {cityData.weather?.[0]?.main === "Clouds" && "☁️"}
                    {cityData.weather?.[0]?.main === "Rain" && "🌧️"}
                    {cityData.weather?.[0]?.main === "Thunderstorm" && "⛈️"}
                    {cityData.weather?.[0]?.main === "Snow" && "🌨️"}
                    {cityData.weather?.[0]?.main === "Drizzle" && "🌦️"}
                    {cityData.weather?.[0]?.main === "Mist" && "🌫️"}
                    {!cityData.weather?.[0]?.main && "🌤️"}
                  </div>
                  <div>
                    <div className="text-6xl font-bold mb-2">
                      {Math.round(cityData.main?.temp - 273.15)}°C
                    </div>
                    <div className="text-2xl text-gray-300 capitalize">
                      {cityData.weather?.[0]?.description}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-6 text-lg text-gray-300">
                  <span className="flex items-center gap-2">
                    <span className="text-xl">🌡️</span>
                    Feels like {Math.round(cityData.main?.feels_like - 273.15)}
                    °C
                  </span>
                </div>
              </div>

              {/* Weather Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="backdrop-blur-md bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-3xl mb-2">🌡️</div>
                  <div className="text-sm text-gray-400">Min / Max</div>
                  <div className="text-xl font-semibold">
                    {Math.round(cityData.main?.temp_min - 273.15)}° /{" "}
                    {Math.round(cityData.main?.temp_max - 273.15)}°
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-3xl mb-2">💧</div>
                  <div className="text-sm text-gray-400">Humidity</div>
                  <div className="text-xl font-semibold">
                    {cityData.main?.humidity}%
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-3xl mb-2">🌬️</div>
                  <div className="text-sm text-gray-400">Wind Speed</div>
                  <div className="text-xl font-semibold">
                    {cityData.wind?.speed} m/s
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-3xl mb-2">🧭</div>
                  <div className="text-sm text-gray-400">Wind Direction</div>
                  <div className="text-xl font-semibold">
                    {cityData.wind?.deg}°
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="text-sm text-gray-400">Pressure</div>
                  <div className="text-xl font-semibold">
                    {cityData.main?.pressure} hPa
                  </div>
                </div>

                <div className="backdrop-blur-md bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-3xl mb-2">👁️</div>
                  <div className="text-sm text-gray-400">Visibility</div>
                  <div className="text-xl font-semibold">
                    {(cityData.visibility / 1000).toFixed(1)} km
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="backdrop-blur-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/10 rounded-2xl border border-orange-300/20 p-6"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🌅</div>
                <h3 className="text-xl font-bold mb-4 text-orange-200">
                  Sun Times
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunrise</span>
                    <span className="font-semibold text-orange-200">
                      {new Date(
                        cityData.sys?.sunrise * 1000
                      ).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sunset</span>
                    <span className="font-semibold text-orange-200">
                      {new Date(cityData.sys?.sunset * 1000).toLocaleTimeString(
                        "en-US",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Cloudiness Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="backdrop-blur-xl bg-gradient-to-br from-gray-500/20 to-slate-500/10 rounded-2xl border border-gray-300/20 p-6"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold mb-4 text-gray-200">
                  Cloud Cover
                </h3>
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-600"></div>
                  <div
                    className="absolute inset-0 rounded-full border-4 border-blue-400 transition-all duration-1000"
                    style={{
                      clipPath: `inset(0 ${
                        100 - (cityData.clouds?.all || 0)
                      }% 0 0)`,
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">
                      {cityData.clouds?.all || 0}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Coordinates Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="backdrop-blur-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 rounded-2xl border border-green-300/20 p-6"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-4 text-green-200">
                  Location
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Latitude</span>
                    <span className="font-mono text-green-200">
                      {cityData.coord?.lat.toFixed(4)}°
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Longitude</span>
                    <span className="font-mono text-green-200">
                      {cityData.coord?.lon.toFixed(4)}°
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Timezone</span>
                    <span className="font-mono text-green-200">
                      {cityData.timezone
                        ? `UTC${cityData.timezone >= 0 ? "+" : ""}${
                            cityData.timezone / 3600
                          }`
                        : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Data Source Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-8 text-gray-400 text-sm"
          >
            <p>
              Data provided by OpenWeather • Last updated:{" "}
              {new Date(cityData.dt * 1000).toLocaleString()}
            </p>
          </motion.div>
        </motion.section>
      )}
    </div>
  );
};

export default Explore;

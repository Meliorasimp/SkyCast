import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { fetchMarineWeatherData } from "../store/slices/marineWeatherSlice";
import { useEffect } from "react";
import { type AppDispatch } from "../store/index";
import { type RootState } from "../store/index";
import { motion } from "framer-motion";

const Marine = () => {
  const dispatch = useDispatch<AppDispatch>();
  const lat = useSelector((state: RootState) => state.forecast.coord.lat);
  const lon = useSelector((state: RootState) => state.forecast.coord.lon);
  const marineWeather = useSelector((state: RootState) => state.marineWeather);
  const forecastData = useSelector((state: RootState) => state.forecast);

  useEffect(() => {
    if (lat && lon) {
      dispatch(fetchMarineWeatherData({ lat, lon }));
    }
  }, [dispatch, lat, lon]);

  const formatTime = (timeStr: string) => {
    if (!timeStr || timeStr === "" || timeStr === "N/A") return "N/A";

    try {
      // Handle different time formats
      let formattedTime;

      // If it's already in HH:MM format
      if (timeStr.match(/^\d{1,2}:\d{2}$/)) {
        formattedTime = new Date(`2000-01-01 ${timeStr}`);
      }
      // If it's in HH:MM AM/PM format
      else if (timeStr.match(/^\d{1,2}:\d{2}\s?(AM|PM)$/i)) {
        formattedTime = new Date(`2000-01-01 ${timeStr}`);
      }
      // If it's a timestamp or other format, try to parse directly
      else {
        formattedTime = new Date(timeStr);
      }

      // Check if the date is valid
      if (isNaN(formattedTime.getTime())) {
        return timeStr; // Return original string if parsing fails
      }

      return formattedTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      console.warn("Time formatting error:", error, "for time:", timeStr);
      return timeStr;
    }
  };

  const getTideIcon = (tideType: string) => {
    switch (tideType?.toLowerCase()) {
      case "high":
        return "🌊";
      case "low":
        return "🏖️";
      default:
        return "〰️";
    }
  };

  const getWindStrength = (speed: number) => {
    if (speed < 10) return { text: "Light", color: "text-green-400" };
    if (speed < 25) return { text: "Moderate", color: "text-yellow-400" };
    if (speed < 40) return { text: "Strong", color: "text-orange-400" };
    return { text: "Very Strong", color: "text-red-400" };
  };

  const getUVLevel = (uv: number) => {
    if (uv <= 2) return { text: "Low", color: "text-green-400" };
    if (uv <= 5) return { text: "Moderate", color: "text-yellow-400" };
    if (uv <= 7) return { text: "High", color: "text-orange-400" };
    if (uv <= 10) return { text: "Very High", color: "text-red-400" };
    return { text: "Extreme", color: "text-purple-400" };
  };
  // Get current marine data
  const currentDay = Array.isArray(marineWeather.forecast?.forecastday)
    ? marineWeather.forecast.forecastday[0]
    : marineWeather.forecast?.forecastday;

  const currentHour = currentDay?.hour?.[0];
  const tides = currentDay?.day?.tides?.[0]?.tide || [];
  const astro = currentDay?.astro;

  // Debug tide data
  console.log("Debug - Tide data:", {
    currentDay: currentDay,
    tidesArray: tides,
    tidesLength: tides.length,
    firstTide: tides[0],
    fullTideStructure: currentDay?.day?.tides,
  });

  return (
    <div className="dashboard-bg min-h-screen relative w-full">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-700"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-teal-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-12 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Marine Weather
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive maritime conditions for{" "}
              {forecastData.name || "your location"}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {marineWeather.loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-center py-20"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
              <span className="text-white text-lg">
                Loading marine conditions...
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Error State */}
      {marineWeather.error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container mx-auto px-4 py-8"
        >
          <div className="bg-red-500/10 backdrop-blur-md rounded-2xl p-8 border border-red-500/20 text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h3 className="text-2xl font-semibold text-red-400 mb-2">
              Unable to Load Marine Data
            </h3>
            <p className="text-gray-300">{marineWeather.error}</p>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      {!marineWeather.loading && !marineWeather.error && (
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Ocean Conditions Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 xl:col-span-1"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl h-full">
                <div className="text-center mb-6">
                  <div className="text-7xl mb-4 animate-pulse">🌊</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Ocean Conditions
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"></div>
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🌡️</span>
                      <span className="text-gray-300">Water Temperature</span>
                    </div>
                    <span className="text-2xl font-bold text-cyan-400">
                      {currentHour?.water_temp_c
                        ? `${currentHour.water_temp_c}°C`
                        : "N/A"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📏</span>
                      <span className="text-gray-300">Wave Height</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-400">
                      {currentHour?.sig_ht_mt
                        ? `${currentHour.sig_ht_mt}m`
                        : "N/A"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🌀</span>
                      <span className="text-gray-300">Swell Height</span>
                    </div>
                    <span className="text-2xl font-bold text-teal-400">
                      {currentHour?.swell_ht_mt
                        ? `${currentHour.swell_ht_mt}m`
                        : "N/A"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⏱️</span>
                      <span className="text-gray-300">Swell Period</span>
                    </div>
                    <span className="text-2xl font-bold text-indigo-400">
                      {currentHour?.swell_period_secs
                        ? `${currentHour.swell_period_secs}s`
                        : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Wind & Weather Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl h-full">
                <div className="text-center mb-6">
                  <div className="text-7xl mb-4">💨</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Wind & Weather
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto"></div>
                </div>

                <div className="space-y-4">
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <div className="text-4xl font-bold text-white mb-1">
                      {currentHour?.wind_kph
                        ? `${currentHour.wind_kph}`
                        : "N/A"}
                      <span className="text-lg text-gray-300"> km/h</span>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        getWindStrength(currentHour?.wind_kph || 0).color
                      }`}
                    >
                      {getWindStrength(currentHour?.wind_kph || 0).text}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {currentHour?.wind_dir} ({currentHour?.wind_degree}°)
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <div className="text-lg font-bold text-white">
                        {currentHour?.gust_kph || "N/A"}
                      </div>
                      <div className="text-xs text-gray-300">Gusts (km/h)</div>
                    </div>

                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <div className="text-lg font-bold text-white">
                        {currentHour?.visibility_km ||
                          currentHour?.vis_km ||
                          "N/A"}
                      </div>
                      <div className="text-xs text-gray-300">
                        Visibility (km)
                      </div>
                    </div>

                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <div className="text-lg font-bold text-white">
                        {currentHour?.humidity || "N/A"}%
                      </div>
                      <div className="text-xs text-gray-300">Humidity</div>
                    </div>

                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <div
                        className={`text-lg font-bold ${
                          getUVLevel(currentHour?.uv || 0).color
                        }`}
                      >
                        {currentHour?.uv || "N/A"}
                      </div>
                      <div className="text-xs text-gray-300">UV Index</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tides Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl h-full">
                <div className="text-center mb-6">
                  <div className="text-7xl mb-4">🌊</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Tide Schedule
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto"></div>
                </div>

                <div className="space-y-4">
                  {tides.length > 0 ? (
                    tides
                      .filter(
                        (tide: {
                          tide_type?: string;
                          tide_time?: string;
                          tide_height_mt?: number;
                        }) => tide && tide.tide_type && tide.tide_time
                      ) // Filter out invalid tides
                      .map(
                        (
                          tide: {
                            tide_type: string;
                            tide_time: string;
                            tide_height_mt: number;
                          },
                          index: number
                        ) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex justify-between items-center p-4 bg-white/5 rounded-2xl"
                          >
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">
                                {getTideIcon(tide.tide_type)}
                              </span>
                              <div>
                                <div className="text-white font-medium capitalize">
                                  {tide.tide_type || "Unknown"} Tide
                                </div>
                                <div className="text-gray-400 text-sm">
                                  {formatTime(tide.tide_time)}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-emerald-400">
                                {tide.tide_height_mt !== undefined &&
                                tide.tide_height_mt !== null &&
                                !isNaN(tide.tide_height_mt)
                                  ? `${Math.abs(tide.tide_height_mt).toFixed(
                                      2
                                    )}m`
                                  : "N/A"}
                              </div>
                              {tide.tide_height_mt < 0 && (
                                <div className="text-xs text-orange-400">
                                  Below mean sea level
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )
                      )
                  ) : (
                    <div className="text-center py-8 text-gray-400">
                      <div className="text-4xl mb-2">🌊</div>
                      <p className="text-sm">No tide data available</p>
                      <p className="text-xs mt-1 text-gray-500">
                        This location may not have tidal information
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Sun & Moon Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2 xl:col-span-3"
            >
              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="text-7xl mb-4">🌅</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Celestial Information
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-white/5 rounded-2xl">
                    <div className="text-4xl mb-3">🌅</div>
                    <div className="text-lg font-bold text-white mb-1">
                      {astro?.sunrise || "N/A"}
                    </div>
                    <div className="text-sm text-gray-300">Sunrise</div>
                  </div>

                  <div className="text-center p-6 bg-white/5 rounded-2xl">
                    <div className="text-4xl mb-3">🌇</div>
                    <div className="text-lg font-bold text-white mb-1">
                      {astro?.sunset || "N/A"}
                    </div>
                    <div className="text-sm text-gray-300">Sunset</div>
                  </div>

                  <div className="text-center p-6 bg-white/5 rounded-2xl">
                    <div className="text-4xl mb-3">🌙</div>
                    <div className="text-lg font-bold text-white mb-1">
                      {astro?.moon_phase || "N/A"}
                    </div>
                    <div className="text-sm text-gray-300">Moon Phase</div>
                  </div>

                  <div className="text-center p-6 bg-white/5 rounded-2xl">
                    <div className="text-4xl mb-3">✨</div>
                    <div className="text-lg font-bold text-white mb-1">
                      {astro?.moon_illumination
                        ? `${astro.moon_illumination}%`
                        : "N/A"}
                    </div>
                    <div className="text-sm text-gray-300">
                      Moon Illumination
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
              <p className="text-gray-300 mb-2">
                Marine weather data for{" "}
                <span className="text-white font-medium">
                  {marineWeather.location?.name ||
                    forecastData.name ||
                    "your location"}
                </span>
              </p>
              <p className="text-sm text-gray-400">
                Last updated:{" "}
                {marineWeather.location?.localtime ||
                  new Date().toLocaleString()}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Marine;

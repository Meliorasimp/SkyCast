import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import type { RootState } from "../store";
import { useEffect } from "react";
import { type AppDispatch } from "../store";
import { fetchMoonPhaseData } from "../store/slices/moonPhaseSlice";
import { motion } from "framer-motion";

const Astronomy = () => {
  const forecastData = useSelector((state: RootState) => state.forecast);
  const dispatch = useDispatch<AppDispatch>();
  const moonPhaseData = useSelector((state: RootState) => state.moonPhase);

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

  const formatTime = (timestamp: number) => {
    if (!timestamp) return "N/A";
    return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (timestamp: number) => {
    if (!timestamp) return "N/A";
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (moonPhaseData.loading) {
    return (
      <div className="dashboard-bg min-h-screen relative w-full">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-white text-xl">Loading astronomy data...</div>
        </div>
      </div>
    );
  }

  if (moonPhaseData.error) {
    return (
      <div className="dashboard-bg min-h-screen relative w-full">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-red-400 text-xl">
            Error: {moonPhaseData.error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-bg min-h-screen relative w-full">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Astronomy</h1>
          <p className="text-gray-300">Celestial data for your location</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Moon Phase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🌙</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Moon Phase
              </h3>
              <div className="text-3xl font-bold text-blue-300 mb-2">
                {moonPhaseData.moon?.phase_name || "N/A"}
              </div>
              <div className="text-gray-300 mb-4">
                {moonPhaseData.moon?.illumination || "0%"} illuminated
              </div>
              <div className="text-sm text-gray-400">
                Stage: {moonPhaseData.moon?.stage || "N/A"}
              </div>
            </div>
          </motion.div>

          {/* Sun Data Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">☀️</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Sun Data
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunrise:</span>
                  <span className="text-white font-medium">
                    {formatTime(moonPhaseData.sun?.sunrise)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunset:</span>
                  <span className="text-white font-medium">
                    {formatTime(moonPhaseData.sun?.sunset)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Solar Noon:</span>
                  <span className="text-white font-medium">
                    {formatTime(moonPhaseData.sun?.solar_noon)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Day Length:</span>
                  <span className="text-white font-medium">
                    {moonPhaseData.sun?.day_length} hours
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Moon Position Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🧭</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Moon Position
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-300">Altitude:</span>
                  <span className="text-white font-medium">
                    {moonPhaseData.detailed?.position?.altitude?.toFixed(1) ||
                      "N/A"}
                    °
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Azimuth:</span>
                  <span className="text-white font-medium">
                    {moonPhaseData.detailed?.position?.azimuth?.toFixed(1) ||
                      "N/A"}
                    °
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Visibility:</span>
                  <span className="text-white font-medium">
                    {moonPhaseData.detailed?.visibility?.visibility_rating ||
                      "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Upcoming Phases Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl lg:col-span-2 xl:col-span-1"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Upcoming Phases
              </h3>
              <div className="space-y-3 text-left">
                {moonPhaseData.upcoming_phases?.new_moon && (
                  <div className="flex justify-between">
                    <span className="text-gray-300">🌑 New Moon:</span>
                    <span className="text-white font-medium text-sm">
                      {formatDate(
                        moonPhaseData.upcoming_phases.new_moon.next.timestamp
                      )}
                    </span>
                  </div>
                )}
                {moonPhaseData.upcoming_phases?.first_quarter && (
                  <div className="flex justify-between">
                    <span className="text-gray-300">🌓 First Quarter:</span>
                    <span className="text-white font-medium text-sm">
                      {formatDate(
                        moonPhaseData.upcoming_phases.first_quarter.next
                          .timestamp
                      )}
                    </span>
                  </div>
                )}
                {moonPhaseData.upcoming_phases?.full_moon && (
                  <div className="flex justify-between">
                    <span className="text-gray-300">🌕 Full Moon:</span>
                    <span className="text-white font-medium text-sm">
                      {formatDate(
                        moonPhaseData.upcoming_phases.full_moon.next.timestamp
                      )}
                    </span>
                  </div>
                )}
                {moonPhaseData.upcoming_phases?.last_quarter && (
                  <div className="flex justify-between">
                    <span className="text-gray-300">🌗 Last Quarter:</span>
                    <span className="text-white font-medium text-sm">
                      {formatDate(
                        moonPhaseData.upcoming_phases.last_quarter.next
                          .timestamp
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Solar Eclipses Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🌞</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Next Solar Eclipse
              </h3>
              <div className="space-y-3 text-left">
                <div className="text-lg font-semibold text-orange-300">
                  {moonPhaseData.sun?.next_solar_eclipse?.type || "N/A"}
                </div>
                <div className="text-sm text-gray-300">
                  Date:{" "}
                  {moonPhaseData.sun?.next_solar_eclipse?.timestamp
                    ? formatDate(moonPhaseData.sun.next_solar_eclipse.timestamp)
                    : "N/A"}
                </div>
                <div className="text-xs text-gray-400">
                  Visible from:{" "}
                  {moonPhaseData.sun?.next_solar_eclipse?.visibility_regions ||
                    "N/A"}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lunar Eclipse Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🌘</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Next Lunar Eclipse
              </h3>
              <div className="space-y-3 text-left">
                {moonPhaseData.next_lunar_eclipse?.type ? (
                  <>
                    <div className="text-lg font-semibold text-purple-300">
                      {moonPhaseData.next_lunar_eclipse.type}
                    </div>
                    <div className="text-sm text-gray-300">
                      Date:{" "}
                      {moonPhaseData.next_lunar_eclipse.timestamp
                        ? formatDate(moonPhaseData.next_lunar_eclipse.timestamp)
                        : "N/A"}
                    </div>
                    <div className="text-xs text-gray-400">
                      Visible from:{" "}
                      {moonPhaseData.next_lunar_eclipse.visibility_regions ||
                        "Global"}
                    </div>
                  </>
                ) : (
                  <div className="text-gray-400">
                    No upcoming lunar eclipse data available
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 text-center text-gray-400 text-sm"
        >
          <p>
            Data updated:{" "}
            {new Date(moonPhaseData.timestamp * 1000).toLocaleString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Astronomy;

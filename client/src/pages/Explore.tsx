import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

const Explore = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCity) return;

    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const cities = [
    //North America
    { value: "newyork", label: "New York, US" },
    { value: "toronto", label: "Toronto, Canada" },
    { value: "mexico", label: "Mexico City, Mexico" },
    { value: "cuba", label: "Havana, Cuba" },
    { value: "dominicanrepublic", label: "Dominican Republic" },
    { value: "kingston", label: "Kingston, Jamaica" },
    { value: "guatemala", label: "Guatemala City, Guatemala" },
    { value: "costarica", label: "San José, Costa Rica" },
    { value: "barcelona", label: "Barcelona, Spain" },
    //South America
    { value: "saopaulo", label: "São Paulo, Brazil" },
    { value: "buenosaires", label: "Buenos Aires, Argentina" },
    { value: "santiago", label: "Santiago, Chile" },
    { value: "bogota", label: "Bogotá, Colombia" },
    { value: "lima", label: "Lima, Peru" },
    { value: "quito", label: "Quito, Ecuador" },
    { value: "caracas", label: "Caracas, Venezuela" },
    { value: "montevideo", label: "Montevideo, Uruguay" },
    { value: "asuncion", label: "Asunción, Paraguay" },
    { value: "la paz", label: "La Paz, Bolivia" },
    //Europe
    { value: "london", label: "London, UK" },
    { value: "paris", label: "Paris, France" },
    { value: "berlin", label: "Berlin, Germany" },
    { value: "rome", label: "Rome, Italy" },
    { value: "madrid", label: "Madrid, Spain" },
    { value: "amsterdam", label: "Amsterdam, Netherlands" },
    { value: "brussels", label: "Brussels, Belgium" },
    { value: "zurich", label: "Zurich, Switzerland" },
    { value: "vienna", label: "Vienna, Austria" },
    { value: "stockholm", label: "Stockholm, Sweden" },
    { value: "oslo", label: "Oslo, Norway" },
    { value: "copenhagen", label: "Copenhagen, Denmark" },
    { value: "helsinki", label: "Helsinki, Finland" },
    { value: "dublin", label: "Dublin, Ireland" },
    { value: "lisbon", label: "Lisbon, Portugal" },
    { value: "warsaw", label: "Warsaw, Poland" },
    { value: "athens", label: "Athens, Greece" },
    { value: "prague", label: "Prague, Czech Republic" },
    { value: "budapest", label: "Budapest, Hungary" },
    { value: "romania", label: "Bucharest, Romania" },

    //Asia
    { value: "beijing", label: "Beijing, China" },
    { value: "tokyo", label: "Tokyo, Japan" },
    { value: "seoul", label: "Seoul, South Korea" },
    { value: "newdelhi", label: "New Delhi, India" },
    { value: "jakarta", label: "Jakarta, Indonesia" },
    { value: "kualalumpur", label: "Kuala Lumpur, Malaysia" },
    { value: "singapore", label: "Singapore" },
    { value: "bangkok", label: "Bangkok, Thailand" },
    { value: "hanoi", label: "Hanoi, Vietnam" },
    { value: " karachi", label: "Karachi, Pakistan" },
    { value: "dhaka", label: "Dhaka, Bangladesh" },
    { value: "riyadh", label: "Riyadh, Saudi Arabia" },
    { value: "dubai", label: "Dubai, UAE" },
    { value: "telaviv", label: "Tel Aviv, Israel" },
    { value: "istanbul", label: "Istanbul, Turkey" },
    { value: "moscow", label: "Moscow, Russia" },
    { value: "tehran", label: "Tehran, Iran" },
    { value: "baghdad", label: "Baghdad, Iraq" },
    { value: "kathmandu", label: "Kathmandu, Nepal" },
    { value: "colombo", label: "Colombo, Sri Lanka" },

    //Africa
    { value: "lagos", label: "Lagos, Nigeria" },
    { value: "cairo", label: "Cairo, Egypt" },
    { value: "nairobi", label: "Nairobi, Kenya" },
    { value: "johannesburg", label: "Johannesburg, South Africa" },
    { value: "accra", label: "Accra, Ghana" },
    { value: "casablanca", label: "Casablanca, Morocco" },
    { value: "algiers", label: "Algiers, Algeria" },
    { value: "tunis", label: "Tunis, Tunisia" },
    { value: "khartoum", label: "Khartoum, Sudan" },
    { value: "addisababa", label: "Addis Ababa, Ethiopia" },
    { value: "dakar", label: "Dakar, Senegal" },
    { value: "abidjan", label: "Abidjan, Ivory Coast" },
    { value: "douala", label: "Douala, Cameroon" },
    { value: "kampala", label: "Kampala, Uganda" },
    { value: "lusaka", label: "Lusaka, Zambia" },
    { value: "harare", label: "Harare, Zimbabwe" },
    { value: "maputo", label: "Maputo, Mozambique" },
    { value: "antananarivo", label: "Antananarivo, Madagascar" },

    //Oceania
    { value: "sydney", label: "Sydney, Australia" },
    { value: "melbourne", label: "Melbourne, Australia" },
    { value: "auckland", label: "Auckland, New Zealand" },
    { value: "suva", label: "Suva, Fiji" },
    { value: "portmoresby", label: "Port Moresby, Papua New Guinea" },
    { value: "honolulu", label: "Honolulu, Hawaii" },
    { value: "samoa", label: "Apia, Samoa" },
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
              onChange={(e) => setSelectedCity(e.target.value)}
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
                onClick={() => setSelectedCity(city.value)}
                className="px-4 py-2 text-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                {city.label}
              </button>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Explore;

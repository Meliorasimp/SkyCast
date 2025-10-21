import "../styles/index.css";
import Landingpagenavbar from "../components/Landingpagenavbar";
import { WeatherInfoData } from "../data/weatherInfoData";
import Stars from "../components/Stars";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Landingpage = () => {
  const nav = useNavigate();
  const handleLandingPageButtonClick = () => {
    nav("/dashboard");
  };
  return (
    <div className="landing-page-gradient-bg min-h-screen relative">
      <Stars />
      <Landingpagenavbar />
      <section className="w-full h-[90vh] flex flex-col justify-center items-center gap-y-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" flex flex-col justify-center items-center gap-y-6"
        >
          <h1 className="text-5xl landing-page-text-gradient-heading">
            Check The Weather, Explore Forecast
          </h1>
          <h3 className="text-2xl landing-page-text-gradient-heading text-white text-center w-2/3">
            Stay prepared anywhere on Earth — real-time forecasts, air quality,
            and alerts at your fingertips.
          </h3>
          <button
            className="rounded-full button-primary w-1/4 h-14 text-xl font-semibold hover:scale-105 transition-transform duration-300"
            onClick={handleLandingPageButtonClick}
          >
            Try it now
          </button>
        </motion.div>
      </section>
      <section className="w-full h-[95vh] flex items-center justify-center flex-col gap-y-12 relative z-10">
        <div
          className="flex justify-center flex-col items-center"
          id="about-section"
        >
          <h1 className="landing-page-text-gradient-heading text-4xl font-extrabold mb-4">
            All the weather info you need in one place
          </h1>
          <p className="landing-page-text w-2/3">
            SkyCast offers a comprehensive suite of features designed to keep
            you informed about current conditions and forecasts, all in one
            convenient location.
          </p>
        </div>
        <div className="w-5/6 flex flex-wrap items-center justify-between h-4/5 gap-y-8">
          {WeatherInfoData.map((info, index) => (
            <motion.div
              key={index}
              className="w-2/7 h-1/2 rounded-2xl glass-morphism-animated flex flex-col gap-y-4 justify-center items-center hover:scale-105 transition-transform duration-300 relative z-20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex justify-between flex-col items-center gap-y-4">
                <img src={info.icon} alt={info.alticon} className="w-16 h-16" />
                <h1 className="text-xl font-bold">{info.name}</h1>
              </div>
              <p className="text-center w-5/6">{info.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="w-full py-16 relative z-10 flex flex-col items-center justify-center gap-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.8 }}
          className="flex flex-col items-center gap-y-6"
        >
          <div className="flex items-center gap-x-3">
            <span className="text-3xl">⭐</span>
            <h2 className="landing-page-text-gradient-heading text-3xl font-bold">
              Enjoying SkyCast?
            </h2>
            <span className="text-3xl">⭐</span>
          </div>
          <p className="landing-page-text text-lg text-center max-w-2xl opacity-90">
            If you love using SkyCast, consider supporting the project by giving
            it a star on GitHub! Your support helps me continue improving this
            weather app.
          </p>
          <a
            href="https://github.com/Meliorasimp/SkyCast"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-3 px-8 py-4 rounded-full bg-gray-900/30 hover:bg-gray-900/50 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
          >
            <svg
              className="w-6 h-6 fill-current landing-page-text"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="landing-page-text font-semibold">
              Star on GitHub
            </span>
            <span className="text-xl">🌟</span>
          </a>
          <p className="text-sm landing-page-text opacity-60">
            Free • Open Source • Made with ❤️
          </p>
        </motion.div>
      </section>
      <div className="w-full h-16"></div>
      <footer className="w-full py-12 relative z-30 flex flex-col items-center justify-center gap-y-6 border-t border-white/10">
        <div className="landing-page-text text-lg opacity-80">
          Powered by trusted weather APIs
        </div>
        <div className="flex items-center gap-x-8 opacity-60">
          <div className="flex items-center gap-x-2">
            <svg
              className="w-5 h-5 fill-current landing-page-text"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-sm landing-page-text">OpenWeatherMap</span>
          </div>
          <span className="text-white/40">•</span>
          <div className="flex items-center gap-x-2">
            <svg
              className="w-5 h-5 fill-current landing-page-text"
              viewBox="0 0 24 24"
            >
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
            <span className="text-sm landing-page-text">WeatherAPI</span>
          </div>
          <span className="text-white/40">•</span>
          <div className="flex items-center gap-x-2">
            <svg
              className="w-5 h-5 fill-current landing-page-text"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm landing-page-text">AccuWeather</span>
          </div>
        </div>
        <div className="text-xs landing-page-text opacity-40 mt-4">
          © 2025 SkyCast. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;

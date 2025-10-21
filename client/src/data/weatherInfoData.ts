import Meterology from "../assets/meteorology.png";
import Wind from "../assets/wind.png";
import Moon from "../assets/moon.png";
import Destination from "../assets/destination.png";
import MarineWeather from "../assets/MarineWeather.png";
import Warning from "../assets/warning.png";

export const WeatherInfoData = [
  {
    name: "Real-time Forecast",
    description:
      "Get the latest weather updates and forecasts using Trusted APIs",
    icon: Meterology,
    alticon: "Meteorology Icon",
  },
  {
    name: "Air Quality",
    description:
      "Monitor air pollution levels to protect your health and well-being",
    icon: Wind,
    alticon: "Wind Icon",
  },
  {
    name: "Astronomy",
    description:
      "Explore celestial events and moon phases for stargazing enthusiasts",
    icon: Moon,
    alticon: "Moon Icon",
  },
  {
    name: "Geolocation",
    description:
      "Access your location-based weather data for accurate forecasts",
    icon: Destination,
    alticon: "Destination Icon",
  },
  {
    name: "Marine Weather",
    description:
      "Get specialized weather forecasts for marine and coastal areas",
    icon: MarineWeather,
    alticon: "Marine Weather Icon",
  },
  {
    name: "Alerts",
    description:
      "Stay informed about severe weather alerts and warnings in your area",
    icon: Warning,
    alticon: "Warning Icon",
  },
];

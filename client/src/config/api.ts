// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const apiConfig = {
  baseURL: API_BASE_URL,
  endpoints: {
    forecast: `${API_BASE_URL}/api/forecast`,
    fivedayforecast: `${API_BASE_URL}/api/fivedayforecast`,
    airquality: `${API_BASE_URL}/api/airquality`,
    moonphase: `${API_BASE_URL}/api/moonphase`,
    marineweather: `${API_BASE_URL}/api/marineweather`,
    explorecity: `${API_BASE_URL}/api/explorecity`,
    health: `${API_BASE_URL}/api/health`,
  },
};

export default apiConfig;

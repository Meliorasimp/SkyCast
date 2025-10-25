import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
import { Location } from "./slices/geoLocationSlice";
import { Forecast } from "./slices/forecastSlice";
import { fivedayForecast } from "./slices/fivedayForecastSlice";
import { airQualityReducer } from "./slices/airQualitySlice";
import { moonPhaseReducer } from "./slices/moonPhaseSlice";
import { marineWeatherReducer } from "./slices/marineWeatherSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    geoLocation: Location,
    forecast: Forecast,
    fivedayForecast: fivedayForecast,
    airQuality: airQualityReducer,
    moonPhase: moonPhaseReducer,
    marineWeather: marineWeatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

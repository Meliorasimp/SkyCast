import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
import { Location } from "./slices/geoLocationSlice";
import { Forecast } from "./slices/forecastSlice";
import { fivedayForecast } from "./slices/fivedayForecastSlice";
import { airQualityReducer } from "./slices/airQualitySlice";
import { moonPhaseReducer } from "./slices/moonPhaseSlice";
import { marineWeatherReducer } from "./slices/marineWeatherSlice";
import { exploreReducer, exploreDataReducer } from "./slices/exploreSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    geoLocation: Location,
    forecast: Forecast,
    fivedayForecast: fivedayForecast,
    airQuality: airQualityReducer,
    moonPhase: moonPhaseReducer,
    marineWeather: marineWeatherReducer,
    explore: exploreReducer,
    exploreData: exploreDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

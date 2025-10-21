import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slices/contactSlice";
import { Location } from "./slices/geoLocationSlice";
import { Forecast } from "./slices/forecastSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    geoLocation: Location,
    forecast: Forecast,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

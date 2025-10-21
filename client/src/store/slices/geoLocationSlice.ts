import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { geoLocation } from "../../types/geolocation";

const initialGeoLocationState: geoLocation = {
  lat: null,
  lon: null,
  loading: false,
  error: null,
};

const geoLocationSlice = createSlice({
  name: "geoLocation",
  initialState: initialGeoLocationState,
  reducers: {
    setGeoLocation: (state, action: PayloadAction<geoLocation>) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});
export const { setGeoLocation, setLoading, setError } =
  geoLocationSlice.actions;

export const Location = geoLocationSlice.reducer;

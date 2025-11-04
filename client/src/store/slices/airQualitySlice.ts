import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { AirQualityData } from "../../types/airQuality";
import { apiConfig } from "../../config/api";

const initialAirQualityDataState: AirQualityData = {
  coord: {
    lon: 0,
    lat: 0,
  },
  list: [
    {
      dt: 0,
      main: {
        aqi: 0,
      },
      components: {
        co: 0,
        no: 0,
        no2: 0,
        o3: 0,
        so2: 0,
        pm2_5: 0,
        pm10: 0,
        nh3: 0,
      },
    },
  ],
  loading: false,
  error: "",
};

const airQualitySlice = createSlice({
  name: "airQuality",
  initialState: initialAirQualityDataState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAirQualityData.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchAirQualityData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      Object.assign(state, action.payload);
    });
    builder.addCase(fetchAirQualityData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch air quality data";
    });
  },
});

export const fetchAirQualityData = createAsyncThunk(
  "airQuality/fetchAirQualityData",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    const response = await axios.post(apiConfig.endpoints.airquality, {
      lat,
      lon,
    });
    return response.data;
  }
);

export const airQualityReducer = airQualitySlice.reducer;

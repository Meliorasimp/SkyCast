import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { type MarineWeather } from "../../types/marineWeather";
import axios from "axios";

const initialWeatherDataState: MarineWeather = {
  location: {
    name: "",
    region: "",
    country: "",
    lat: 0,
    lon: 0,
    tz_id: "",
    localtime_epoch: 0,
    localtime: "",
  },
  forecast: {
    forecastday: {
      date: "",
      date_epoch: 0,
      day: {
        maxtemp_c: 0,
        maxtemp_f: 0,
        mintemp_c: 0,
        mintemp_f: 0,
        avgtemp_c: 0,
        avgtemp_f: 0,
        maxwind_mph: 0,
        maxwind_kph: 0,
        totalprecip_mm: 0,
        totalprecip_in: 0,
        totalsnow_cm: 0,
        avgvis_km: 0,
        avgvis_miles: 0,
        avghumidity: 0,
        tides: [
          {
            tide: [
              {
                tide_time: "",
                tide_height_mt: 0,
                tide_type: "",
              },
              {
                tide_time: "",
                tide_height_mt: 0,
                tide_type: "",
              },
              {
                tide_time: "",
                tide_height_mt: 0,
                tide_type: "",
              },
              {
                tide_time: "",
                tide_height_mt: 0,
                tide_type: "",
              },
            ],
          },
        ],
        condition: {
          text: "",
          icon: "",
          code: 0,
        },
        uv: 0,
      },
      astro: {
        sunrise: "",
        sunset: "",
        moonrise: "",
        moonset: "",
        moon_phase: "",
        moon_illumination: "",
        is_moon_up: 0,
        is_sun_up: 0,
      },
      hour: [
        {
          time_epoch: 0,
          time: "",
          temp_c: 0,
          temp_f: 0,
          is_day: 0,
          condition: {
            text: "",
            icon: "",
            code: 0,
          },
          wind_mph: 0,
          wind_kph: 0,
          wind_degree: 0,
          wind_dir: "",
          pressure_mb: 0,
          pressure_in: 0,
          precip_mm: 0,
          precip_in: 0,
          humidity: 0,
          cloud: 0,
          feelslike_c: 0,
          feelslike_f: 0,
          windchill_c: 0,
          windchill_f: 0,
          heatindex_c: 0,
          heatindex_f: 0,
          dewpoint_c: 0,
          dewpoint_f: 0,
          vis_km: 0,
          vis_miles: 0,
          gust_mph: 0,
          gust_kph: 0,
          uv: 0,
          sig_ht_mt: 0,
          swell_ht_mt: 0,
          swell_ht_ft: 0,
          swell_dir: 0,
          swell_dir_16_point: "",
          swell_period_secs: 0,
          water_temp_c: 0,
          water_temp_f: 0,
        },
      ],
    },
  },
  loading: false,
  error: "",
};

const marineWeatherSlice = createSlice({
  name: "marineWeather",
  initialState: initialWeatherDataState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMarineWeatherData.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchMarineWeatherData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      Object.assign(state, action.payload);
    });
    builder.addCase(fetchMarineWeatherData.rejected, (state, action) => {
      state.loading = false;
      state.error =
        action.error.message || "Failed to fetch marine weather data";
    });
  },
});

export const fetchMarineWeatherData = createAsyncThunk(
  "marineWeather/fetchMarineWeatherData",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/marineweather",
        {
          lat: lat,
          lon: lon,
        }
      );
      return response.data as MarineWeather;
    } catch (error) {
      console.error("Frontend: Error fetching marine weather data:", error);
      throw new Error("Failed to fetch marine weather data");
    }
  }
);

export const marineWeatherReducer = marineWeatherSlice.reducer;

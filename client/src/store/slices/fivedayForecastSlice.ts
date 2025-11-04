import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type FiveDayForecastData } from "../../types/fivedayForecast";
import axios from "axios";
import { apiConfig } from "../../config/api";

const initialFiveDayForecastDataState: FiveDayForecastData = {
  cod: "",
  message: 0,
  cnt: 0,
  list: [
    {
      dt: 0,
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        sea_level: 0,
        grnd_level: 0,
        humidity: 0,
        temp_kf: 0,
      },
      weather: [
        {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0,
        deg: 0,
        gust: 0,
      },
      visibility: 0,
      pop: 0,
      rain: {
        "3h": 0,
      },
      sys: {
        pod: "",
      },
      dt_txt: "",
    },
  ],
  city: {
    id: 0,
    name: "",
    coord: {
      lat: 0,
      lon: 0,
    },
    country: "",
    population: 0,
    timezone: 0,
    sunrise: 0,
    sunset: 0,
  },
  loading: false,
  error: "",
};

const fivedayForecastSlice = createSlice({
  name: "fivedayForecast",
  initialState: initialFiveDayForecastDataState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFiveDayForecast.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchFiveDayForecast.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      Object.assign(state, action.payload);
    });
    builder.addCase(fetchFiveDayForecast.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch five day forecast";
    });
  },
});

export const fetchFiveDayForecast = createAsyncThunk(
  "fivedayForecast/fetchFiveDayForecast",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    try {
      const response = await axios.post(apiConfig.endpoints.fivedayforecast, {
        lat,
        lon,
      });
      return response.data as FiveDayForecastData;
    } catch (error) {
      console.error("Failed to fetch five day forecast data", error);
    }
  }
);

export const fivedayForecast = fivedayForecastSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type ForecastData } from "../../types/forecast";
import axios from "axios";

const initialForecastDataState: ForecastData = {
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: [{ id: 0, main: "", description: "", icon: "" }],
  base: "",
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
    sea_level: 0,
    grnd_level: 0,
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
  rain: {
    "1h": 0,
    "3h": 0,
  },
  clouds: {
    all: 0,
  },
  dt: 0,
  sys: {
    type: 0,
    id: 0,
    country: "",
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  id: 0,
  name: "",
  cod: 0,
  loading: false,
  error: "",
};

const forecastSlice = createSlice({
  name: "forecast",
  initialState: initialForecastDataState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchForecast.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchForecast.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      Object.assign(state, action.payload);
    });
    builder.addCase(fetchForecast.rejected, (state, action) => {
      state.loading = false;
      state.error =
        (action.payload as string) || "Failed to fetch forecast data";
    });
  },
});

export const fetchForecast = createAsyncThunk(
  "forecast/fetchForecast",
  async (
    { lat, lon }: { lat: number | null; lon: number | null },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post("http://localhost:3000/api/forecast", {
        lat,
        lon,
      });
      console.log("Forecast data fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching forecast:", error);
      return rejectWithValue("Failed to fetch weather data");
    }
  }
);

export const Forecast = forecastSlice.reducer;

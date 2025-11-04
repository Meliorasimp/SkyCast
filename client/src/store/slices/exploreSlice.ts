import axios from "axios";
import { type CityType, type CityDataStateType } from "../../types/explore";
import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { apiConfig } from "../../config/api";

const initialCityState: CityType = {
  selectedCity: "",
  loading: false,
  error: "",
};

const initialCityStateData: CityDataStateType = {
  coord: {
    lon: 0,
    lat: 0,
  },
  weather: [
    {
      id: 0,
      main: "",
      description: "",
      icon: "",
    },
  ],
  base: "",
  main: {
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    temp_min: 0,
    temp_max: 0,
  },
  visibility: 0,
  wind: {
    speed: 0,
    deg: 0,
  },
  clouds: {
    all: 0,
  },
  dt: 0,
  sys: {
    type: 0,
    id: 0,
    message: 0,
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

const exploreSlice = createSlice({
  name: "explore",
  initialState: initialCityState,
  reducers: {
    setSelectedCity(state, action: PayloadAction<string>) {
      state.selectedCity = action.payload;
    },
  },
});

const exploreDataSlice = createSlice({
  name: "exploreData",
  initialState: initialCityStateData,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCityData.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchCityData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      Object.assign(state, action.payload);
    });
    builder.addCase(fetchCityData.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch city data";
    });
  },
});

export const fetchCityData = createAsyncThunk(
  "exploreData/fetchCityData",
  async (city: string) => {
    try {
      const response = await axios.post(apiConfig.endpoints.explorecity, {
        city,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching city data:", error);
      return initialCityStateData;
    }
  }
);

export const { setSelectedCity } = exploreSlice.actions;

export const exploreReducer = exploreSlice.reducer;
export const exploreDataReducer = exploreDataSlice.reducer;

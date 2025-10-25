import { createSlice } from "@reduxjs/toolkit";

import { type MarineWeather } from "../../types/marineWeather";

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
};

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { type MoonPhaseData } from "../../types/moonPhase";
import axios from "axios";

const initialMoonPhaseDataState: MoonPhaseData = {
  timestamp: 0,
  datestamp: "",
  plan: "",
  sun: {
    sunrise: 0,
    sunriseTimestamp: 0,
    sunset: 0,
    sunsetTimestamp: 0,
    solar_noon: 0,
    day_length: 0,
    position: {
      altitude: 0,
      azimuth: 0,
      distance: 0,
    },
    next_solar_eclipse: {
      timestamp: 0,
      datestamp: "",
      type: "",
      visibility_regions: "",
    },
  },
  moon: {
    phase: 0,
    phase_name: "",
    major_phase: "",
    stage: "",
    illumination: 0,
    age_days: 0,
    lunar_cycle: 0,
    emoji: "",
    zodiac: {
      sun_sign: "",
      moon_sign: "",
    },
  },
  moonrise: 0,
  moonrise_timestamp: 0,
  moonset: 0,
  moonset_timestamp: 0,
  next_lunar_eclipse: {
    timestamp: 0,
    datestamp: "",
    type: "",
    visibility_regions: "",
  },
  detailed: {
    position: {
      altitude: 0,
      azimuth: 0,
      distance: 0,
      parallactic_angle: 0,
      phase_angle: 0,
    },
    visibility: {
      visible_hours: 0,
      best_viewing_time: 0,
      visibility_rating: "",
      illumination: 0,
      viewing_conditions: {
        phase_quality: "",
        recommended_equipment: "",
      },
    },
  },
  upcoming_phases: {
    new_moon: {
      last: {
        timestamp: 0,
        datestamp: "",
        days_ago: 0,
      },
      next: {
        timestamp: 0,
        datestamp: "",
        days_ahead: 0,
      },
    },
    first_quarter: {
      last: {
        timestamp: 0,
        datestamp: "",
        days_ago: 0,
      },
      next: {
        timestamp: 0,
        datestamp: "",
        days_ahead: 0,
      },
    },
    full_moon: {
      last: {
        timestamp: 0,
        datestamp: "",
        days_ago: 0,
        name: "",
        description: "",
      },
      next: {
        timestamp: 0,
        datestamp: "",
        days_ahead: 0,
        name: "",
        description: "",
      },
    },
    last_quarter: {
      last: {
        timestamp: 0,
        datestamp: "",
        days_ago: 0,
      },
      next: {
        timestamp: 0,
        datestamp: "",
        days_ahead: 0,
      },
    },
  },
  illumination_details: {
    percentage: 0,
    visible_fraction: 0,
    phase_angle: 0,
  },
  events: {
    moonrise_visible: false,
    moonset_visible: false,
    optimal_viewing_perdiod: {
      start_time: 0,
      end_time: 0,
      duration_hours: 0,
      viewing_quality: "",
      recommendation: [],
    },
  },
  location: {
    latitude: 0,
    longitude: 0,
    precision: 0,
    using_default_location: false,
    note: "",
  },
  loading: false,
  error: "",
};

const moonPhaseSlice = createSlice({
  name: "moonPhase",
  initialState: initialMoonPhaseDataState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMoonPhaseData.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchMoonPhaseData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      Object.assign(state, action.payload);
    });
    builder.addCase(fetchMoonPhaseData.rejected, (state) => {
      state.loading = false;
      state.error = "Failed to fetch moon phase data";
    });
  },
});

export const fetchMoonPhaseData = createAsyncThunk(
  "moonPhase/fetchMoonPhaseData",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/moonphase", {
        lat: lat,
        lon: lon,
      });
      return response.data as MoonPhaseData;
    } catch (error) {
      console.error("Error fetching moon phase data:", error);
      throw error;
    }
  }
);

export const moonPhaseReducer = moonPhaseSlice.reducer;

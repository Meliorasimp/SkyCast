export type MoonPhaseData = {
  timestamp: number;
  datestamp: string;
  plan: string;
  sun: {
    sunrise: number;
    sunriseTimestamp: number;
    sunset: number;
    sunsetTimestamp: number;
    solar_noon: number;
    day_length: number;
    position: {
      altitude: number;
      azimuth: number;
      distance: number;
    };
    next_solar_eclipse: {
      timestamp: number;
      datestamp: string;
      type: string;
      visibility_regions: string;
    };
  };
  moon: {
    phase: number;
    phase_name: string;
    major_phase: string;
    stage: string;
    illumination: number;
    age_days: number;
    lunar_cycle: number;
    emoji: string;
    zodiac: {
      sun_sign: string;
      moon_sign: string;
    };
  };
  moonrise: number;
  moonrise_timestamp: number;
  moonset: number;
  moonset_timestamp: number;
  next_lunar_eclipse: {
    timestamp: number;
    datestamp: string;
    type: string;
    visibility_regions: string;
  };
  detailed: {
    position: {
      altitude: number;
      azimuth: number;
      distance: number;
      parallactic_angle: number;
      phase_angle: number;
    };
    visibility: {
      visible_hours: number;
      best_viewing_time: number;
      visibility_rating: string;
      illumination: number;
      viewing_conditions: {
        phase_quality: string;
        recommended_equipment: string;
      };
    };
  };
  upcoming_phases: {
    new_moon: {
      last: {
        timestamp: number;
        datestamp: string;
        days_ago: number;
      };
      next: {
        timestamp: number;
        datestamp: string;
        days_ahead: number;
      };
    };
    first_quarter: {
      last: {
        timestamp: number;
        datestamp: string;
        days_ago: number;
      };
      next: {
        timestamp: number;
        datestamp: string;
        days_ahead: number;
      };
    };
    full_moon: {
      last: {
        timestamp: number;
        datestamp: string;
        days_ago: number;
        name: string;
        description: string;
      };
      next: {
        timestamp: number;
        datestamp: string;
        days_ahead: number;
        name: string;
        description: string;
      };
    };
    last_quarter: {
      last: {
        timestamp: number;
        datestamp: string;
        days_ago: number;
      };
      next: {
        timestamp: number;
        datestamp: string;
        days_ahead: number;
      };
    };
  };
  illumination_details: {
    percentage: number;
    visible_fraction: number;
    phase_angle: number;
  };
  events: {
    moonrise_visible: boolean;
    moonset_visible: boolean;
    optimal_viewing_perdiod: {
      start_time: number;
      end_time: number;
      duration_hours: number;
      viewing_quality: string;
      recommendation: string[];
    };
  };
  location: {
    latitude: number;
    longitude: number;
    precision: number;
    using_default_location: boolean;
    note: string;
  };
  loading?: boolean;
  error?: string;
};

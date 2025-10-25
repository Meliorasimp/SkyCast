export type MarineWeather = {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  forecast: {
    forecastday: {
      date: string;
      date_epoch: number;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        avgtemp_c: number;
        avgtemp_f: number;
        maxwind_mph: number;
        maxwind_kph: number;
        totalprecip_mm: number;
        totalprecip_in: number;
        totalsnow_cm: number;
        avgvis_km: number;
        avgvis_miles: number;
        avghumidity: number;
        tides: [
          {
            tide: [
              {
                tide_time: string;
                tide_height_mt: number;
                tide_type: string;
              },
              {
                tide_time: string;
                tide_height_mt: number;
                tide_type: string;
              },
              {
                tide_time: string;
                tide_height_mt: number;
                tide_type: string;
              },
              {
                tide_time: string;
                tide_height_mt: number;
                tide_type: string;
              }
            ];
          }
        ];
        condition: {
          text: string;
          icon: string;
          code: number;
        };
        uv: number;
      };
      astro: {
        sunrise: string;
        sunset: string;
        moonrise: string;
        moonset: string;
        moon_phase: string;
        moon_illumination: string;
        is_moon_up: number;
        is_sun_up: number;
      };
      hour: [
        {
          //first hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //second hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //third hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //fourth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //fifth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //sixth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //seventh hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //eighth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //ninth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //tenth hour objecy
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //eleventh hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //twelfth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //thirteenth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //fourteenth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //fifteenth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //sixteenth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //seventeenth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //eighteenth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //nineteenth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //twentieth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //twenty-first hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //twenty-second hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //twenty-third hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        },
        {
          //twenty-fourth hour object
          time_epoch: number;
          time: string;
          temp_c: number;
          temp_f: number;
          is_day: number;
          condition: {
            text: string;
            icon: string;
            code: number;
          };
          wind_mph: number;
          wind_kph: number;
          wind_degree: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          precip_mm: number;
          precip_in: number;
          humidity: number;
          cloud: number;
          feelslike_c: number;
          feelslike_f: number;
          windchill_c: number;
          windchill_f: number;
          heatindex_c: number;
          heatindex_f: number;
          dewpoint_c: number;
          dewpoint_f: number;
          vis_km: number;
          vis_miles: number;
          gust_mph: number;
          gust_kph: number;
          uv: number;
          sig_ht_mt: number;
          swell_ht_mt: number;
          swell_ht_ft: number;
          swell_dir: number;
          swell_dir_16_point: string;
          swell_period_secs: number;
          water_temp_c: number;
          water_temp_f: number;
        }
      ];
    };
  };
};

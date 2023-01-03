import { WeatherSearchLatLongResults, WeatherSearchResult } from '../../interfaces/weather.interface';

export const mockSearchResult: WeatherSearchResult[] = [
  {
    name: 'Altstadt',
    local_names: {
      de: 'Altstadt'
    },
    lat: 49.93756945,
    lon: 11.56115542727499,
    country: 'DE',
    state: 'Bavaria'
  },
  {
    name: 'Å',
    local_names: {
      ru: 'O'
    },
    lat: 67.8796157,
    lon: 12.9840442,
    country: 'NO'
  },
  {
    name: 'Åfjord',
    lat: 63.9607726,
    lon: 10.2247137,
    country: 'NO'
  },
  {
    name: 'Ouled Achour',
    local_names: {
      ar: 'ا',
      fr: 'Ouled Achour'
    },
    lat: 36.4265371,
    lon: 5.8893479,
    country: 'DZ',
    state: 'Mila'
  },
  {
    name: 'Oe အိုး',
    local_names: {
      my: 'အိုး'
    },
    lat: 21.8106959,
    lon: 96.0868149,
    country: 'MM',
    state: 'Mandalay'
  }
];

export const mockOneCallResult: WeatherSearchLatLongResults = {
  lat: 49.9376,
  lon: 11.5612,
  timezone: "Europe/Berlin",
  timezone_offset: 3600,
  current: {
    dt: 1672728209,
    sunrise: 1672729906,
    sunset: 1672759439,
    temp: 41.99,
    feels_like: 36.54,
    pressure: 1027,
    humidity: 91,
    dew_point: 39.56,
    uvi: 0,
    clouds: 100,
    visibility: 10000,
    wind_speed: 8.99,
    wind_deg: 270,
    wind_gust: 11.01,
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04n"
      }
    ]
  },
  daily: [
    {
      dt: 1672743600,
      sunrise: 1672729906,
      sunset: 1672759439,
      moonrise: 1672749120,
      moonset: 1672719000,
      moon_phase: 0.39,
      temp: {
        day: 44.33,
        min: 38.88,
        max: 45.64,
        night: 38.88,
        eve: 40.08,
        morn: 42.6
      },
      feels_like: {
        day: 41.22,
        night: 35.64,
        eve: 37.94,
        morn: 38.52
      },
      pressure: 1030,
      humidity: 84,
      dew_point: 39.81,
      wind_speed: 8.37,
      wind_deg: 271,
      wind_gust: 19.62,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: 98,
      pop: 0.02,
      uvi: 0.49
    },
    {
      dt: 1672830000,
      sunrise: 1672816296,
      sunset: 1672845903,
      moonrise: 1672837380,
      moonset: 1672809600,
      moon_phase: 0.42,
      temp: {
        day: 42.66,
        min: 37.06,
        max: 46.22,
        night: 46.22,
        eve: 44.37,
        morn: 37.24
      },
      feels_like: {
        day: 36.3,
        night: 39.29,
        eve: 37.67,
        morn: 32.27
      },
      pressure: 1025,
      humidity: 71,
      dew_point: 32.81,
      wind_speed: 17.05,
      wind_deg: 247,
      wind_gust: 38.45,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: 96,
      pop: 0.99,
      rain: 2.73,
      uvi: 0.31
    },
    {
      dt: 1672916400,
      sunrise: 1672902682,
      sunset: 1672932370,
      moonrise: 1672926180,
      moonset: 1672899900,
      moon_phase: 0.45,
      temp: {
        day: 47.91,
        min: 45.48,
        max: 48.49,
        night: 46.36,
        eve: 45.48,
        morn: 46.45
      },
      feels_like: {
        day: 42.76,
        night: 42.04,
        eve: 40.82,
        morn: 40.32
      },
      pressure: 1021,
      humidity: 86,
      dew_point: 42.87,
      wind_speed: 17.92,
      wind_deg: 252,
      wind_gust: 39.03,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: 100,
      pop: 0.92,
      rain: 2.67,
      uvi: 0.24
    },
    {
      dt: 1673002800,
      sunrise: 1672989065,
      sunset: 1673018839,
      moonrise: 1673015700,
      moonset: 1672989600,
      moon_phase: 0.48,
      temp: {
        day: 47.46,
        min: 40.98,
        max: 47.8,
        night: 40.98,
        eve: 44.91,
        morn: 47.71
      },
      feels_like: {
        day: 41.22,
        night: 37.87,
        eve: 39.88,
        morn: 43.02
      },
      pressure: 1019,
      humidity: 80,
      dew_point: 40.62,
      wind_speed: 15.7,
      wind_deg: 242,
      wind_gust: 34.9,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: 100,
      pop: 0.87,
      rain: 1.62,
      uvi: 0.21
    },
    {
      dt: 1673089200,
      sunrise: 1673075446,
      sunset: 1673105310,
      moonrise: 1673105700,
      moonset: 1673078700,
      moon_phase: 0.5,
      temp: {
        day: 43.36,
        min: 37.31,
        max: 43.36,
        night: 40.19,
        eve: 39.4,
        morn: 37.31
      },
      feels_like: {
        day: 43.36,
        night: 36.46,
        eve: 35.82,
        morn: 37.31
      },
      pressure: 1018,
      humidity: 87,
      dew_point: 38.62,
      wind_speed: 5.3,
      wind_deg: 142,
      wind_gust: 13.69,
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d"
        }
      ],
      clouds: 89,
      pop: 0.05,
      uvi: 0.12
    },
    {
      dt: 1673175600,
      sunrise: 1673161823,
      sunset: 1673191784,
      moonrise: 1673196120,
      moonset: 1673167080,
      moon_phase: 0.55,
      temp: {
        day: 46.45,
        min: 41.36,
        max: 46.45,
        night: 46.17,
        eve: 44.24,
        morn: 43.02
      },
      feels_like: {
        day: 41.83,
        night: 39.83,
        eve: 38.12,
        morn: 39.42
      },
      pressure: 1005,
      humidity: 83,
      dew_point: 40.57,
      wind_speed: 14.61,
      wind_deg: 214,
      wind_gust: 33.76,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: 97,
      pop: 1,
      rain: 5.22,
      uvi: 1
    },
    {
      dt: 1673262000,
      sunrise: 1673248197,
      sunset: 1673278260,
      moonrise: 1673286720,
      moonset: 1673255040,
      moon_phase: 0.58,
      temp: {
        day: 42.21,
        min: 40.26,
        max: 45.21,
        night: 41.67,
        eve: 40.66,
        morn: 41.76
      },
      feels_like: {
        day: 35.13,
        night: 33.76,
        eve: 32.92,
        morn: 34.66
      },
      pressure: 1003,
      humidity: 85,
      dew_point: 37.04,
      wind_speed: 15.68,
      wind_deg: 237,
      wind_gust: 36.15,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: 96,
      pop: 1,
      rain: 5.65,
      uvi: 1
    },
    {
      dt: 1673348400,
      sunrise: 1673334568,
      sunset: 1673364737,
      moonrise: 1673377320,
      moonset: 1673342580,
      moon_phase: 0.61,
      temp: {
        day: 42.01,
        min: 38.86,
        max: 42.01,
        night: 40.32,
        eve: 38.86,
        morn: 40.6
      },
      feels_like: {
        day: 35.49,
        night: 34.9,
        eve: 33.46,
        morn: 32.97
      },
      pressure: 1017,
      humidity: 84,
      dew_point: 36.41,
      wind_speed: 19.86,
      wind_deg: 243,
      wind_gust: 43.73,
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d"
        }
      ],
      clouds: 85,
      pop: 1,
      rain: 4.02,
      uvi: 1
    }
  ]
};

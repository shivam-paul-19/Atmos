import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const W_API_URL = import.meta.env.VITE_W_API_URL;
const NEW_API = import.meta.env.VITE_NEW_API_URL;

const forcastData = {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
          {
            "dt": 1733994000,
            "main": {
              "temp": 21.06,
              "feels_like": 19.95,
              "temp_min": 21.06,
              "temp_max": 21.74,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 989,
              "humidity": 28,
              "temp_kf": -0.68
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 3.08,
              "deg": 298,
              "gust": 4.16
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-12 09:00:00"
          },
          {
            "dt": 1734004800,
            "main": {
              "temp": 21.01,
              "feels_like": 19.74,
              "temp_min": 20.91,
              "temp_max": 21.01,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 989,
              "humidity": 22,
              "temp_kf": 0.1
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 3.12,
              "deg": 312,
              "gust": 6.81
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-12 12:00:00"
          },
          {
            "dt": 1734015600,
            "main": {
              "temp": 19.51,
              "feels_like": 18.01,
              "temp_min": 18.73,
              "temp_max": 19.51,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 991,
              "humidity": 19,
              "temp_kf": 0.78
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.63,
              "deg": 313,
              "gust": 7.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-12 15:00:00"
          },
          {
            "dt": 1734026400,
            "main": {
              "temp": 16.85,
              "feels_like": 15.01,
              "temp_min": 16.85,
              "temp_max": 16.85,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 991,
              "humidity": 16,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
              }
            ],
            "clouds": {
              "all": 12
            },
            "wind": {
              "speed": 2.6,
              "deg": 317,
              "gust": 7.37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-12 18:00:00"
          },
          {
            "dt": 1734037200,
            "main": {
              "temp": 15.29,
              "feels_like": 13.32,
              "temp_min": 15.29,
              "temp_max": 15.29,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 991,
              "humidity": 17,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 82
            },
            "wind": {
              "speed": 2.83,
              "deg": 316,
              "gust": 7.49
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-12 21:00:00"
          },
          {
            "dt": 1734048000,
            "main": {
              "temp": 14.27,
              "feels_like": 12.2,
              "temp_min": 14.27,
              "temp_max": 14.27,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 991,
              "humidity": 17,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 85
            },
            "wind": {
              "speed": 2.99,
              "deg": 305,
              "gust": 8.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-13 00:00:00"
          },
          {
            "dt": 1734058800,
            "main": {
              "temp": 14.18,
              "feels_like": 12.12,
              "temp_min": 14.18,
              "temp_max": 14.18,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 992,
              "humidity": 18,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
              }
            ],
            "clouds": {
              "all": 30
            },
            "wind": {
              "speed": 3.72,
              "deg": 302,
              "gust": 8.11
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-13 03:00:00"
          },
          {
            "dt": 1734069600,
            "main": {
              "temp": 18.92,
              "feels_like": 17.23,
              "temp_min": 18.92,
              "temp_max": 18.92,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 992,
              "humidity": 14,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
              }
            ],
            "clouds": {
              "all": 15
            },
            "wind": {
              "speed": 4.52,
              "deg": 307,
              "gust": 7.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-13 06:00:00"
          },
          {
            "dt": 1734080400,
            "main": {
              "temp": 22.19,
              "feels_like": 20.7,
              "temp_min": 22.19,
              "temp_max": 22.19,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 989,
              "humidity": 9,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 1
            },
            "wind": {
              "speed": 5.15,
              "deg": 308,
              "gust": 6.96
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-13 09:00:00"
          },
          {
            "dt": 1734091200,
            "main": {
              "temp": 21.04,
              "feels_like": 19.49,
              "temp_min": 21.04,
              "temp_max": 21.04,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 989,
              "humidity": 11,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 5
            },
            "wind": {
              "speed": 4.16,
              "deg": 303,
              "gust": 9.28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-13 12:00:00"
          },
          {
            "dt": 1734102000,
            "main": {
              "temp": 18.63,
              "feels_like": 16.89,
              "temp_min": 18.63,
              "temp_max": 18.63,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 990,
              "humidity": 13,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03n"
              }
            ],
            "clouds": {
              "all": 28
            },
            "wind": {
              "speed": 3.75,
              "deg": 301,
              "gust": 10.28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-13 15:00:00"
          },
          {
            "dt": 1734112800,
            "main": {
              "temp": 16.86,
              "feels_like": 15.02,
              "temp_min": 16.86,
              "temp_max": 16.86,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 990,
              "humidity": 16,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
              }
            ],
            "clouds": {
              "all": 14
            },
            "wind": {
              "speed": 3.73,
              "deg": 302,
              "gust": 10.56
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-13 18:00:00"
          },
          {
            "dt": 1734123600,
            "main": {
              "temp": 15.48,
              "feels_like": 13.58,
              "temp_min": 15.48,
              "temp_max": 15.48,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 990,
              "humidity": 19,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 1
            },
            "wind": {
              "speed": 3.63,
              "deg": 304,
              "gust": 10.11
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-13 21:00:00"
          },
          {
            "dt": 1734134400,
            "main": {
              "temp": 14.35,
              "feels_like": 12.39,
              "temp_min": 14.35,
              "temp_max": 14.35,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 990,
              "humidity": 21,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 3.78,
              "deg": 306,
              "gust": 10.3
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-14 00:00:00"
          },
          {
            "dt": 1734145200,
            "main": {
              "temp": 14.46,
              "feels_like": 12.51,
              "temp_min": 14.46,
              "temp_max": 14.46,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 992,
              "humidity": 21,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 3.48,
              "deg": 306,
              "gust": 6.94
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-14 03:00:00"
          },
          {
            "dt": 1734156000,
            "main": {
              "temp": 19.28,
              "feels_like": 17.66,
              "temp_min": 19.28,
              "temp_max": 19.28,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 992,
              "humidity": 15,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 3.71,
              "deg": 300,
              "gust": 5.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-14 06:00:00"
          },
          {
            "dt": 1734166800,
            "main": {
              "temp": 22.9,
              "feels_like": 21.51,
              "temp_min": 22.9,
              "temp_max": 22.9,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 990,
              "humidity": 10,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 4.08,
              "deg": 300,
              "gust": 5.56
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-14 09:00:00"
          },
          {
            "dt": 1734177600,
            "main": {
              "temp": 21.78,
              "feels_like": 20.3,
              "temp_min": 21.78,
              "temp_max": 21.78,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 990,
              "humidity": 11,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 3.3,
              "deg": 301,
              "gust": 8.1
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-14 12:00:00"
          },
          {
            "dt": 1734188400,
            "main": {
              "temp": 19.08,
              "feels_like": 17.38,
              "temp_min": 19.08,
              "temp_max": 19.08,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 991,
              "humidity": 13,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.57,
              "deg": 297,
              "gust": 7.27
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-14 15:00:00"
          },
          {
            "dt": 1734199200,
            "main": {
              "temp": 17.23,
              "feels_like": 15.35,
              "temp_min": 17.23,
              "temp_max": 17.23,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 990,
              "humidity": 13,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.83,
              "deg": 292,
              "gust": 7.6
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-14 18:00:00"
          },
          {
            "dt": 1734210000,
            "main": {
              "temp": 15.72,
              "feels_like": 13.71,
              "temp_min": 15.72,
              "temp_max": 15.72,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 990,
              "humidity": 14,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.88,
              "deg": 296,
              "gust": 7.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-14 21:00:00"
          },
          {
            "dt": 1734220800,
            "main": {
              "temp": 14.54,
              "feels_like": 12.44,
              "temp_min": 14.54,
              "temp_max": 14.54,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 990,
              "humidity": 15,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.78,
              "deg": 293,
              "gust": 7.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-15 00:00:00"
          },
          {
            "dt": 1734231600,
            "main": {
              "temp": 14.7,
              "feels_like": 12.62,
              "temp_min": 14.7,
              "temp_max": 14.7,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 992,
              "humidity": 15,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.86,
              "deg": 292,
              "gust": 4.94
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-15 03:00:00"
          },
          {
            "dt": 1734242400,
            "main": {
              "temp": 19.19,
              "feels_like": 17.48,
              "temp_min": 19.19,
              "temp_max": 19.19,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 993,
              "humidity": 12,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.22,
              "deg": 296,
              "gust": 3.5
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-15 06:00:00"
          },
          {
            "dt": 1734253200,
            "main": {
              "temp": 22.71,
              "feels_like": 21.3,
              "temp_min": 22.71,
              "temp_max": 22.71,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 990,
              "humidity": 10,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 2.48,
              "deg": 304,
              "gust": 3.77
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-15 09:00:00"
          },
          {
            "dt": 1734264000,
            "main": {
              "temp": 21.61,
              "feels_like": 20.11,
              "temp_min": 21.61,
              "temp_max": 21.61,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 990,
              "humidity": 11,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 1.64,
              "deg": 298,
              "gust": 1.69
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-15 12:00:00"
          },
          {
            "dt": 1734274800,
            "main": {
              "temp": 19.43,
              "feels_like": 17.77,
              "temp_min": 19.43,
              "temp_max": 19.43,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 991,
              "humidity": 13,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 1.41,
              "deg": 297,
              "gust": 1.63
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-15 15:00:00"
          },
          {
            "dt": 1734285600,
            "main": {
              "temp": 17.74,
              "feels_like": 15.94,
              "temp_min": 17.74,
              "temp_max": 17.74,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 991,
              "humidity": 14,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 1
            },
            "wind": {
              "speed": 1.34,
              "deg": 313,
              "gust": 1.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-15 18:00:00"
          },
          {
            "dt": 1734296400,
            "main": {
              "temp": 16.3,
              "feels_like": 14.38,
              "temp_min": 16.3,
              "temp_max": 16.3,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 991,
              "humidity": 15,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 1.52,
              "deg": 337,
              "gust": 1.77
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-15 21:00:00"
          },
          {
            "dt": 1734307200,
            "main": {
              "temp": 15.29,
              "feels_like": 13.27,
              "temp_min": 15.29,
              "temp_max": 15.29,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 990,
              "humidity": 15,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 0.68,
              "deg": 333,
              "gust": 0.8
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-16 00:00:00"
          },
          {
            "dt": 1734318000,
            "main": {
              "temp": 15.65,
              "feels_like": 13.66,
              "temp_min": 15.65,
              "temp_max": 15.65,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 992,
              "humidity": 15,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 0.74,
              "deg": 327,
              "gust": 1.14
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-16 03:00:00"
          },
          {
            "dt": 1734328800,
            "main": {
              "temp": 19.95,
              "feels_like": 18.29,
              "temp_min": 19.95,
              "temp_max": 19.95,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 992,
              "humidity": 11,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 1.06,
              "deg": 10,
              "gust": 1.26
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-16 06:00:00"
          },
          {
            "dt": 1734339600,
            "main": {
              "temp": 22.64,
              "feels_like": 21.19,
              "temp_min": 22.64,
              "temp_max": 22.64,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 989,
              "humidity": 9,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 0.69,
              "deg": 329,
              "gust": 1.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-16 09:00:00"
          },
          {
            "dt": 1734350400,
            "main": {
              "temp": 21.6,
              "feels_like": 20.05,
              "temp_min": 21.6,
              "temp_max": 21.6,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 988,
              "humidity": 9,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 0.83,
              "deg": 304,
              "gust": 0.84
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-16 12:00:00"
          },
          {
            "dt": 1734361200,
            "main": {
              "temp": 19.67,
              "feels_like": 17.98,
              "temp_min": 19.67,
              "temp_max": 19.67,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 989,
              "humidity": 11,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 0.72,
              "deg": 14,
              "gust": 0.77
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-16 15:00:00"
          },
          {
            "dt": 1734372000,
            "main": {
              "temp": 17.84,
              "feels_like": 16.05,
              "temp_min": 17.84,
              "temp_max": 17.84,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 989,
              "humidity": 14,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 1.2,
              "deg": 52,
              "gust": 1.19
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-16 18:00:00"
          },
          {
            "dt": 1734382800,
            "main": {
              "temp": 16.48,
              "feels_like": 14.63,
              "temp_min": 16.48,
              "temp_max": 16.48,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 989,
              "humidity": 17,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 1.16,
              "deg": 67,
              "gust": 1.21
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-16 21:00:00"
          },
          {
            "dt": 1734393600,
            "main": {
              "temp": 15.38,
              "feels_like": 13.47,
              "temp_min": 15.38,
              "temp_max": 15.38,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 989,
              "humidity": 19,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01n"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 1.28,
              "deg": 81,
              "gust": 1.57
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2024-12-17 00:00:00"
          },
          {
            "dt": 1734404400,
            "main": {
              "temp": 15.61,
              "feels_like": 13.75,
              "temp_min": 15.61,
              "temp_max": 15.61,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 990,
              "humidity": 20,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 1.32,
              "deg": 95,
              "gust": 1.99
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-17 03:00:00"
          },
          {
            "dt": 1734415200,
            "main": {
              "temp": 20.29,
              "feels_like": 18.77,
              "temp_min": 20.29,
              "temp_max": 20.29,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 990,
              "humidity": 15,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 1.54,
              "deg": 142,
              "gust": 1.94
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2024-12-17 06:00:00"
          }
        ],
        "city": {
          "id": 1273840,
          "name": "Connaught Place",
          "coord": {
            "lat": 28.6517,
            "lon": 77.2219
          },
          "country": "IN",
          "population": 0,
          "timezone": 19800,
          "sunrise": 1733967279,
          "sunset": 1734004519
        }   
}

export default function SearchBox({update}) {
    let [cityName, setCityName] = useState("");

    let getWeatherInfo = async () => {
        let response = await axios.get(`${API_URL}?q=${cityName}&appid=${API_KEY}`);
        let jsonRes = response.data;
        let weatherInfo = await axios.get(`${W_API_URL}?lat=${jsonRes[0].lat}&lon=${jsonRes[0].lon}&appid=${API_KEY}&units=metric`);
        let wJson = await weatherInfo.data;
        let forcast = await axios.get(`${NEW_API}?lat=${jsonRes[0].lat}&lon=${jsonRes[0].lon}&appid=${API_KEY}&units=metric`);
        console.log("here: ",forcast.data);
        let w_results = {
            location: jsonRes[0].name,
            temp: wJson.main.temp,
            humid: wJson.main.humidity,
            feelsLike: wJson.main.feels_like,
            weather: wJson.weather[0].description,
            visibility: wJson.visibility,
            wind_speed: wJson.wind.speed
        };
        return [w_results, forcast.data];
    }

    let changeCityName = (event) => {
        setCityName(event.target.value);
    }

    let submitCity = async (event) => {
        event.preventDefault();
        setCityName("");
        update(false, []);
        let newInfo = await getWeatherInfo();
        update(newInfo[0], newInfo[1].list);
    }

    return (
        <>
            <form action=""  onSubmit={submitCity}>
                <TextField value={cityName} label="City name" variant="outlined" onChange={changeCityName} sx={{ backgroundColor: 'white', borderRadius: '10px' }} required/>
                <br /><br />
                <Button variant="contained" type='submit' sx={{background: "white", color: 'black'}}>Search</Button>
            </form>
        </>
    )
}
import {api_key, base_url} from "../../utils/constants.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {WeatherInfoResponse} from "../../utils/types";

export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: builder => ({
        getWeatherByCity: builder.query<WeatherInfoResponse, string>({
            query: (city) => `?q=${city}&appid=${api_key}&units=metric`
        })
    }),
    keepUnusedDataFor: 10,
    refetchOnFocus: true
})

export const {useGetWeatherByCityQuery} = weatherApi
// export const fetchWeather = (city: string) => async (dispatch: AppDispatch) => {
//     try {
//         const res = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
//         const data = await res.json();
//         dispatch(setWeather({
//             country: data.sys.country,
//             city: data.name,
//             temp: data.main.temp,
//             pressure: data.main.pressure,
//             sunset: data.sys.sunset * 1000
//         }));
//         dispatch(setMessage(''));
//     } catch (e) {
//         console.log(e)
//         dispatch(setMessage('Enter correct city name'));
//         dispatch(setWeather({}));
//     }
// }
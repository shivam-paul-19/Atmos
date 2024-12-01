import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
;
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const W_API_URL = import.meta.env.VITE_W_API_URL;

export default function SearchBox({update}) {
    let [cityName, setCityName] = useState("");

    let getWeatherInfo = async () => {
        let response = await axios.get(`${API_URL}?q=${cityName}&appid=${API_KEY}`);
        let jsonRes = response.data;
        let weatherInfo = await axios.get(`${W_API_URL}?lat=${jsonRes[0].lat}&lon=${jsonRes[0].lon}&appid=${API_KEY}&units=metric`);
        let wJson = await weatherInfo.data;
        let w_results = {
            location: jsonRes[0].name,
            temp: wJson.main.temp,
            max_temp: wJson.main.temp_max,
            min_temp: wJson.main.temp_min,
            humid: wJson.main.humidity,
            feelsLike: wJson.main.feels_like,
            weather: wJson.weather[0].description
        };
        console.log(w_results);
        return w_results;
    }

    let changeCityName = (event) => {
        setCityName(event.target.value);
    }

    let submitCity = async (event) => {
        event.preventDefault();
        console.log(cityName);
        setCityName("");
        let newInfo = await getWeatherInfo();
        update(newInfo);
    }

    return (
        <>
            <form action=""  onSubmit={submitCity}>
                <TextField id="outlined-basic" value={cityName} label="City name" variant="outlined" onChange={changeCityName} required/>
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </>
    )
}
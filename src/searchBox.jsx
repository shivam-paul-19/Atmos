import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const W_API_URL = import.meta.env.VITE_W_API_URL;
const NEW_API = import.meta.env.VITE_NEW_API_URL;

export default function SearchBox({update}) {
    let [cityName, setCityName] = useState("");

    let getWeatherInfo = async () => {
        let response = await axios.get(`${API_URL}?q=${cityName}&appid=${API_KEY}`);
        let jsonRes = response.data;
        let weatherInfo = await axios.get(`${W_API_URL}?lat=${jsonRes[0].lat}&lon=${jsonRes[0].lon}&appid=${API_KEY}&units=metric`);
        let wJson = await weatherInfo.data;
        let forcast = await axios.get(`${NEW_API}?lat=${jsonRes[0].lat}&lon=${jsonRes[0].lon}&appid=${API_KEY}&units=metric`);
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
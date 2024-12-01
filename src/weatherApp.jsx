import SearchBox from './searchBox';
import InfoBox from './weatherCard';
import { useState } from 'react';

export default function WeatherApp() {
    let [info, setInfo] = useState({
        feelsLike: 24.98,
        humid: 94,
        location: "Delhi",
        max_temp: 24.06,
        min_temp: 24.06,
        temp: 24.06,
        weather: "light rain"
    });

    let updateInfo = (newInfo) => {
        setInfo(newInfo);
    }

    return (
        <div>
            <h1>Atmos Weather app</h1>
            <SearchBox update={updateInfo}/>
            <br />
            <InfoBox info={info}/>
        </div>
    )
}
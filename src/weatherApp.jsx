import SearchBox from './searchBox';
import InfoBox from './weatherCard';
import { useState } from 'react';

export default function WeatherApp() {
    let [info, setInfo] = useState("none");

    let updateInfo = (newInfo) => {
        setInfo(newInfo);
    }

    return (
        <div>
            <img src="https://i.ibb.co/k3jm5HL/logo.png" alt="" height={50} style={{margin: '30px 0'}}/>
            <SearchBox update={updateInfo}/>
            <br />
            <InfoBox info={info}/>
        </div>
    )
}
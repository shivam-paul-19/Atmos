import SearchBox from './searchBox';
import InfoBox from './weatherCard';
import ForcastCard from './forcastCard';
import { useState } from 'react';

export default function WeatherApp() {
    let [info, setInfo] = useState("none");
    let [forecastArray, setForcast] = useState([]);
    let [show, setShow] = useState(false);

    let updateInfo = (newInfo, forcast) => {
        setInfo(newInfo);
        setForcast(forcast);
        setTimeout(()=> {
            setShow(true);
        }, 1000);
    }

    return (
        <div style={{
            display:'flex',
            justifyContent: 'space-around',
            alignItems: "center"
        }}>
            <div>
                <img src="https://i.ibb.co/k3jm5HL/logo.png" alt="" height={50} style={{margin: '30px 0'}}/>
                <SearchBox update={updateInfo}/>
                <br />
                <InfoBox info={info}/>
            </div>
            <div>
                <h1>Forecast</h1>
                <div id="forcast">
                {
                    (show)? (
                        <ul style={{
                            listStyle: 'none'
                        }}>
                            {
                                forecastArray.map((el) => <li style={{
                                    margin: "5px"
                                }}><ForcastCard info={el}/></li>)
                            }
                        </ul>
                    ) : (
                        <h1>Forcast info</h1>
                    )
                }
                </div>
            </div>
        </div>
    )
}
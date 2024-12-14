export default function ForcastCard({info}) {
    return (
        <div style={{
            height: "100px",
            width: "380px",
            backgroundColor: "black",
            borderRadius: '10px',
            display: "flex",
            flexDirection: "column",
        }}>
            <div><i>{info.dt_txt}</i></div>
            <div><b>{info.weather[0].description}</b></div>
            <div>Temperature: {info.main.temp}&deg;C</div>
            <div>Humidity: {info.main.humidity}</div>
        </div>
    )
}
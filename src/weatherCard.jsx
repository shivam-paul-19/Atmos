import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./weatherCard.css";

export default function InfoBox({ info }) {
  return (
    <div className="weatherCard">
      <div className="w_box">
        {info == "none" ? (
          <h1>Search city to know the weather</h1>
        ) : info == false ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress sx={{ color: "white" }} />
          </Box>
        ) : (
          <Card sx={{ backgroundColor: "transparent", color: "white" }}>
            <h1>{info.location}</h1>
            <CardActionArea>
              <CardContent>
                <h2>{info.weather}</h2>
                <Typography variant="body2" sx={{ color: "white" }}>
                  <p>Temperature: {info.temp}&deg;C</p>
                  <p>Feels like: {info.feelsLike}&deg;C</p>
                  <p>Humidity: {info.humid}</p>
                  <p>Visibility: {info.visibility/1000} Kms</p>
                  <p>Wind Speed: {info.wind_speed} Kmph</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </div>
    </div>
  );
}

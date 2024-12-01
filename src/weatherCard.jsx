
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './weatherCard.css';

export default function InfoBox({info}) {
    

    return (
        <div className='weatherCard'>
            <div className="w_box">
            <Card sx={{ maxWidth: 345 }}>
            <h1>{info.location}</h1>
            <CardActionArea>
                <CardContent>
                <h2>
                    {info.weather}
                </h2>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <p>Temperature {info.temp}</p>
                    <p>Feels like {info.feelsLike}</p>
                    <p>Humidity {info.humid}</p>
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
            </div>
        </div>
    );
}
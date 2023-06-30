import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Wrapper } from './starship.styles';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import React from 'react';

const Starship = ({ship, maxFilms}) => {
  //const affiliation = ship.manufacturer.includes("Sienar") ? "Empire": "Rebel"
const affiliation = ship.manufacturer.includes("Sienar") ? process.env.PUBLIC_URL + `/images/dark.jpg`: process.env.PUBLIC_URL + `/images/rebel.svg`
  return (
        <Wrapper side={affiliation}>
             <Card sx={{ maxWidth: 345 , minHeight: 440}}>
             <CardMedia
          component="img"
          height="140"
          image={process.env.PUBLIC_URL + `/images/${ship.name}.jpg` }
          alt={ship.name}
        />
    <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <h5>{ship.name}{(maxFilms === ship.films.length) ? <EmojiEventsIcon style={{fill: "gold"}}/> : null}</h5>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p>Model: {ship.model}</p>
            <p>Films: {ship.films.length}</p>
          </Typography>
          {/*TODO HAha refactor to props of styled components 
          */}
          <CardMedia
          component="img"
          object-fit="fill"
          height="auto"
          image={affiliation}
          alt="group affiliation"
        />
        </CardContent>                
        </Card>
    </Wrapper>
)




}
    

  


export default  Starship;
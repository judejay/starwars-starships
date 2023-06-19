import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Wrapper } from './starship.styles';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import React from 'react'
const Starship = ({ship, maxFilms}) => {
    return (
        <Wrapper>
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
        </CardContent>          
        </Card>      
    </Wrapper>
)




}
    

  


export default  Starship;
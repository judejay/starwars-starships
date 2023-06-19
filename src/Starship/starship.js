
import { Wrapper } from './starship.styles';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { red } from '@mui/material/colors';
import React from 'react'

const Starship = ({ship, maxFilms}) => {
    return (
        <Wrapper>
    <img src ={process.env.PUBLIC_URL + `/images/${ship.name}.jpg` }  alt={ship.name}/>
    {(maxFilms === ship.films.length) ? <EmojiEventsIcon style={{fill: "gold"}}/> : null}


            <h3>Name: {ship.name}</h3>
            <p>Model: {ship.model}</p>
            <p>Films: {ship.films.length}</p>
            
    </Wrapper>
)
}
    

  


export default  Starship;
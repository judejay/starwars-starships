
import { Wrapper } from './starship.styles';

//import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import React from 'react'

const Starship = ({ship, maxFilms}) => {
    return (
        <Wrapper>
    <img src ={process.env.PUBLIC_URL + `/images/${ship.name}.jpg` }  alt={ship.name}/>
    {(maxFilms === ship.films.length) ? <h1> LONGEST</h1> : null}


            <h3>Name: {ship.name}</h3>
            <p>Model: {ship.model}</p>
            <p>Films: {ship.films.length}</p>
            
    </Wrapper>
)
}
    

  


export default  Starship;
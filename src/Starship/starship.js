
import { Wrapper } from './starship.styles';


import React from 'react'

const Starship = ({ship, maxFilms, longestFilms, longest}) => {
console.log("starship", longest)
    return (
        <Wrapper>
        <img src={ship.url} alt={ship.name}/>
        <div>
            {/* { longestFilms.includes(ship.name) && <h1>true</h1> } */}
            
           {(maxFilms === ship.films.length) ? <h1> LONGEST</h1> : null}
            <h3>Name: {ship.name}</h3>
            <p>Model: {ship.model}</p>
            <p>Films: {ship.films.length}</p>
            
        </div>
    </Wrapper>
)
}
    

  


export default  Starship;
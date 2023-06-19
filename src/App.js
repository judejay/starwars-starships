import { LinearProgress } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import { Wrapper } from "./App.styles";
import { useEffect, useState } from "react";
import  Button  from "@material-ui/core/Button";
import Starship from "./Starship/starship";


const App = () => {
   const [ starships, setStarships ] = useState([])
   const [ maxFilms, setMaxFilms ] = useState(0)
   var longestFilms = [];
   var longest = 0;

   const getMostFilms = (ships) => {
    ships.forEach(function(ship) {
      //console.log(ship)
        if (ship?.films?.length > longest) {
          longestFilms = [ship];
            longest = ship.films.length;
        } else if (ship?.films?.length === longest) {
            longestFilms.push(ship);
        }
    });
   // console.log("app" ,longest);
    setMaxFilms(longest) ;
    return longest;
}



  const getStarships =  () => {
    fetch('https://swapi.dev/api/starships/')
    .then(response => {
     return response.json()
    })
    .then(data => {
      return  data.results     
    })
    .then(ships => {
    return  ships.filter(ship =>(
        (parseInt(ship.crew) < 10)     
      ))})
    .then(shipsUnsorted =>{
     return shipsUnsorted.sort((a, b) => parseInt(a.crew) - parseInt(b.crew))      
    })
    
    .then(smallShips =>{
      getMostFilms(smallShips)
      //const maxFilms = Math.max(...smallShips.map(o => o.films), 0);
     // setMaxFilms(maxFilms)
      return setStarships(smallShips)
    })
  
 }
 

 return (  
    <Wrapper>
      <Button onClick={() => getStarships()}>click me</Button>
      <Grid container spacing={3}>     
         {starships?.map(ship => (
           <Starship key={ship.name} longest={longest} longestFilms={longestFilms} maxFilms={maxFilms} ship={ship} >{ship.name} </Starship>
           ))}   
      </Grid>
    </Wrapper>
  );
}

export default App;

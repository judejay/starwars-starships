import LinearProgress from '@mui/material/LinearProgress';
import Grid from "@material-ui/core/Grid";
import { Wrapper } from "./App.styles";
import {  useState } from "react";
import  Button  from "@material-ui/core/Button";
import Starship from "./Starship/starship";


const App = () => {
   const [ starships, setStarships ] = useState([])
   const [ maxFilms, setMaxFilms ] = useState(0)
   const [isLoading, setIsLoading] = useState(false)
   var longestFilms = [];
   var longest = 0;
   const getMostFilms = (ships) => {
    ships.forEach(function(ship) {
        if (ship?.films?.length > longest) {
          longestFilms = [ship];
            longest = ship.films.length;
        } else if (ship?.films?.length === longest) {
            longestFilms.push(ship);
        }
    });
    setMaxFilms(longest) ;
    return longest;
}



  const getStarships =  () => {
    setIsLoading(true)
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
       setIsLoading(false);
      return setStarships(smallShips)
    })
  
 }
 if (isLoading) return <LinearProgress />;

 return (  
    <Wrapper>
      <Button variant="contained" color="success" onClick={() => getStarships()}>Get Starships</Button>
      <Grid container spacing={1}>     
         {starships?.map(ship => (
            <Grid ship key={ship.name} xs={12} sm={4} >
               <Starship  longest={longest} longestFilms={longestFilms} maxFilms={maxFilms} ship={ship} >{ship.name} </Starship>
            </Grid>
        ))}   
      </Grid>
    </Wrapper>
  );
}

export default App;

import { LinearProgress } from "@mui/material";
import Grid from "@mui/material";
import { Wrapper } from "./App.styles";
import { useEffect, useState } from "react";



const App = () => {
   const [ starships, setStarships ] = useState([])

  const getStarships =  () => {
    fetch('https://swapi.dev/api/starships/')
    .then(response => {
     return response.json()
    })
    .then(data => {
     setStarships(data.results)
    }) 
 }
 
 useEffect(() => {
  getStarships()
 }, []);


 return (  
    <div className="App">
      {starships.length >0 && (
        <ul>
         {starships.map(ship => (
            <li key={ship.name} >{ship.name} </li>
         ))}
          
        </ul>
      )}
    </div>
  );
}

export default App;

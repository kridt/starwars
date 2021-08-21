import axios from "axios";
import React, { useEffect, useState } from "react";
import CharacterFetch from "../components/CharacterFetch";
import PlanetFetch from "../components/PlanetFetch";
import StarshipFetch from "../components/StarshipFetch";
import "./Movies.css";

export default function Movies({ id }) {
  var [movie, setMovie] = useState({});
  var characters = movie.characters;

  useEffect(
    function () {
      axios
        .get(`https://swapi.dev/api/films/${id}`)
        .then((response) => setMovie(response.data));
    },
    [setMovie]
  );



  return (
    <div>
      <h1 className="movieTitle">{movie.title}</h1>
      <h1>Characters</h1>
      
      <div className="movieInfo">
        
        <div className="box1 movieCharacters">
          {characters?.map((characterMap) => {
            return <CharacterFetch key={characterMap} url={characterMap} />;
          })}
        </div>

        

        <div className="movieStarships">
          <h1>Starships</h1>
          <div className="box1">

          {movie.starships?.map((starship) => {
            
            return(
              <StarshipFetch key={starship} starships={starship} />
              
              )
            })}
            </div>
        </div>


        <div className="moviePlanets">
          <h1>Planets</h1>
          <div className="box1">
            {movie.planets?.map((planet) =>{

              return(
                <PlanetFetch keys={planet} planet={planet} />
              )
            })}
          </div>
        </div>
        
        
      </div>
    </div>
  );
}

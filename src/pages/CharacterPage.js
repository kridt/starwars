import axios from "axios";
import React, { useEffect, useState } from "react";
import PlanetFetch from "../components/PlanetFetch";
import "./CharacterPage.css";

export default function CharacterPage({ id }) {
  // never use default export
  // It is bad practice, the more components, the more difficult it will be to search within the project.
  // Always use named exports
  var [character, setCharacter] = useState({});

  useEffect(
    function () {
      // use arrow functions everywhere unless you need "this"
      axios
        .get(`https://swapi.dev/api/people/${id}`)
        .then((response) => setCharacter(response.data));
    },
    [setCharacter]
    /*
      You don't need this dependency here, useState memorializes setCharacter and ensures that the function doesn't change.
      Your request will always be sent once when a component is created.
      But if ID changes, the request won't be sent, because ID is not in the useEffect dependency
      I think you should remove setCharacter and add id

      if you need useEffect to be called only once, then leave the array empty

      I saw the same in other components.
    */
  );

  console.log(character);
  return (
      /*
        It is better to use conditional rendering if the content display depends on the data received via the API.
        Rendering is an expensive operation, it is better to return null if there is no data yet
      */
    <div>
      <h1 key={character.name}>{character.name}</h1>
      <div className="characterPage">
        <h1>Stats</h1>
        <div className="box1">
          <div>
            <p className="text1">Height:</p>
            <p className="text1">{character.height + " cm"}</p>
          </div>

          <div>
            <p className="text1">Hair Color</p>
            <p className="text1">{character.hair_color}</p>
          </div>

          <div>
            <p className="text1">Skin Color</p>
            <p className="text1">{character.skin_color}</p>
          </div>

          <div className="homePlanet">
            <p className="text1">Home Planet</p>
            <PlanetFetch planet={character.homeworld} />
          </div>
          <div>
            <p className="text1">Birth Year</p>
            <p className="text1">{character.birth_year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

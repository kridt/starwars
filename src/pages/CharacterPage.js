import axios from "axios";
import React, { useEffect, useState } from "react";
import PlanetFetch from "../components/PlanetFetch";
import "./CharacterPage.css";

export default function CharacterPage({ id }) {
  var [character, setCharacter] = useState({});

  useEffect(
    function () {
      axios
        .get(`https://swapi.dev/api/people/${id}`)
        .then((response) => setCharacter(response.data));
    },
    [setCharacter]
  );

  console.log(character);

  return (
    <div>
      <h1 key={character.name}>{character.name}</h1>
      <div className="characterPage">
        <h1>Stats</h1>
        <div className="box1">
          <div>
            <p>Height:</p>
            <p>{character.height + " cm"}</p>
          </div>

          <div>
            <p>Hair Color</p>
            <p>{character.hair_color}</p>
          </div>

          <div>
            <p>Skin Color</p>
            <p>{character.skin_color}</p>
          </div>

          <div className="homePlanet">
            <p>Home Planet</p>
            <PlanetFetch planet={character.homeworld} />
          </div>
          <div>
            <p>Birth Year</p>
            <p>{character.birth_year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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

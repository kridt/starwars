import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PlanetFetch({ planet }) {
  var [planets, setPlanets] = useState({});

  useEffect(
    function () {
      axios.get(`${planet}`).then((response) => setPlanets(response.data));
    },
    [setPlanets]
  );

  return (
    <div>
      <p className="text1">{planets.name}</p>
    </div>
  );
}

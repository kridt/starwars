import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Film.css";
import { Link } from "@reach/router";

export default function Film() {
  var [film, setFilm] = useState({});

  useEffect(
    function () {
      axios
        .get("https://swapi.dev/api/films/")
        .then((response) => setFilm(response.data));
    },
    [setFilm]
  );

  var inOrder = film.results;

  inOrder?.sort(function (a, b) {
    return a.episode_id - b.episode_id;
  });

  return (
    <div className="filmDiv">
      <h1 className="movieTitle">Star Wars API</h1>
      <h1>Pick a movie</h1>
      <div>
        <div className="box1">
          <ol className="moviesOrder">
            {film &&
              film.results?.map((info) => {
                var movieUrl = info.url;
                var numberOnly = movieUrl.match(/\d+/);

                return (
                  <Link to={"/movie/" + numberOnly} key={info.episode_id}>
                    {info.episode_id}. {info.title}
                  </Link>
                );
              })}
          </ol>
        </div>
      </div>
    </div>
  );
}

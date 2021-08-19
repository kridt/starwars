import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Film.css";
import { Link } from "@reach/router";

export default function Film() {
    var [film, setFilm] = useState({});

    useEffect(
        function (){

            axios.get("https://swapi.dev/api/films/")
            .then(response => setFilm(response.data));
        }, [setFilm])

       
        var inOrder = film.results;

        inOrder?.sort(function(a, b){
            return a.episode_id - b.episode_id;
        })

        console.log(inOrder);
        
    return (
        <div>
            <h1>Star Wars API</h1>
            <div>
                 <ol className="moviesOrder">
                    {film && film.results?.map((info)=>{
                        
                        return(
                            <Link to={"/movie/" + info.episode_id} key={info.episode_id}>{info.episode_id}. {info.title}</Link>
                        )

                    })}
                </ol> 
            </div>
        </div>
    )
}

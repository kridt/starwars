import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterFetch from '../components/CharacterFetch';
import "./Movies.css";

export default function Movies({ id }) {
    var [movie, setMovie] = useState({});
    var characters = movie.characters;

    useEffect(
        function (){

            axios.get(`https://swapi.dev/api/films/${id}`)
            .then(response => setMovie(response.data));
        }, [setMovie])
        
         
    return (
        <div>
            <h1 className="movieTitle">{movie.title}</h1>

            <div className="movieInfo">
                <div className="movieCharacters">
                    {characters?.map((characterMap) =>{    
                               
                        return(
                            <CharacterFetch url={characterMap} />
                               )
                            })}
                </div>
            </div>   
        </div>
    )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function CharacterPage({ id }) {
    var [character, setCharacter] = useState({});

    useEffect(
        function() {
            axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => setCharacter(response.data))
        }, [setCharacter]
    )

    console.log(character);

    return (
        <div>
            <h1>{character.name}</h1>
        </div>
    )
}

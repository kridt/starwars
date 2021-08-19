import { Link } from '@reach/router';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function CharacterFetch({ url }) {
    var [character, setCharacter] = useState({});

    useEffect(
        function() {
            axios.get(`${url}`)
            .then(response => setCharacter(response.data))
        }, [setCharacter]
    )

    console.log(character);

    
    var characterUrl = character.url;
    var characterID = characterUrl?.match(/\d+/);
    console.log(parseInt(characterID));
    return (
        <div>
            <Link to={`/character/` + characterID}>{character.name}</Link>
        </div>
    )
}

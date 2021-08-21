import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function StarshipFetch({ starships }) {
     var [starship, setStarship] = useState({});

    useEffect(
        function() {
            axios.get(`${starships}`)
            .then(response => setStarship(response.data))
        }, [setStarship]
    ) 
    
    

    return (
        <div>
            <p className="text1">{starship.name}</p>

        </div>
    )
}

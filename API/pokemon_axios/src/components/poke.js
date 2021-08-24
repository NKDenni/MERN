import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {

    const [poke, setPoke] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => { setPoke(response.data.results) })
            .catch(err => (console.log(err)))
    }, []);

    return (
        <div className="container p-3 d-flex justify-content-center">
            <ul className="row d-flex flex-column">
            {
            poke.map((p,index)=>{
                return (
                    <li key={index} className="col-sm-5 w-100 text-start">{p.name}</li>
                )
            })
            }
            </ul>
        </div>
    );
}

export default Pokemon;
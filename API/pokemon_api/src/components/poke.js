import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {

    const [poke, setPoke] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => { return response.json(); })
            // .then(response => { console.log(response); })
            .then(response => setPoke(response.results))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container p-3 d-flex justify-content-center">
            <ul className="row d-flex flex-column">
            {
            poke.map((p,index)=>{
                return (
                    <li key={index} className="col-sm-2">{p.name}</li>
                )
            })
            }
            </ul>
        </div>
    );
}

export default Pokemon;
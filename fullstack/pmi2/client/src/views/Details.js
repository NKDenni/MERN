import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Detail = (props) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setItem({
                ...res.data
            }))
            .catch((err) => console.log(err));
    }, [])
    return (
        <div className="m-5 d-flex align-items-center flex-column">
            <h3>Product Name: {item.title}</h3>
            <h5>Price: ${item.price}</h5>
            <p>Description: {item.desc}</p>
        </div>
    )
}
export default Detail;


import React, { useEffect, useState } from 'react'
import DeleteButton from '../components/delete';
import { navigate } from '@reach/router';
import axios from 'axios';

const Detail = (props) => {
    const { removeFromDom } = props;
    const [item, setItem] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
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
            <div className="row d-flex justify-content-center">
                <DeleteButton
                id={props.id}
                successCallback={() => removeFromDom(props.id)} />
            </div>
        </div>
    )
}
export default Detail;


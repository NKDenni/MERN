import React, { useEffect, useState } from 'react'
import { navigate } from '@reach/router';
import axios from 'axios';

const Detail = (props) => {
    const { setTitle, setPrice, setDesc, removeFromDom } = props;
    const [item, setItem] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => setItem({
                ...res.data
            }))
            .catch((err) => console.log(err));
    }, [])

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + props.id)
            .then(res => {
                removeFromDom(productId)
                setTitle("");
                setPrice(0);
                setDesc("");
                navigate('/api/products')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="m-5 d-flex align-items-center flex-column">
            <h3>Product Name: {item.title}</h3>
            <h5>Price: ${item.price}</h5>
            <p>Description: {item.desc}</p>
            <button
                className="ms-2 mt-4 btn-light rounded col-sm-1"
                onClick={(e) => { deleteProduct(props.id) }}>
                Delete
            </button>
        </div>
    )
}
export default Detail;


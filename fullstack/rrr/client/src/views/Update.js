import React, { useState, useEffect } from 'react'
import Form from '../components/form';
import DeleteButton from '../components/delete';
import axios from 'axios';
import { navigate } from '@reach/router';

const Update = (props) => {

    const { id, removeFromDom } = props;

    const [loaded, setLoaded] = useState(false);
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (product) => {
        axios.put('http://localhost:8000/product/' + id +'/edit', product)
            .then(res => {
                console.log(res.data)
                navigate('/api/products')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="row d-flex align-items-center flex-column m-5">
            <h1 className="text-center">Update this Product</h1>
            {loaded && <Form onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDesc={product.desc} />}<div className="row d-flex justify-content-center col-sm-1 col-center">
                <DeleteButton
                id={product._id}
                successCallback={() => removeFromDom(product._id)} />
            </div>
        </div>
    )
}
export default Update;


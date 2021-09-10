import React, { useEffect, useState } from 'react'
import Form from '../components/form';
import ProductList from '../components/plist';
import axios from 'axios';
const Main = (props) => {
    // const [message, setMessage] = useState("Loading...")
    const { title, setTitle, price, setPrice, desc, setDesc, products, setProducts, removeFromDom } = props;

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            });
    }, [])

    return (
        <div>
            {/* <h2>Message from the backend: { message }</h2> */}
            <Form title={title} setTitle={setTitle} price={price} setPrice={setPrice} desc={desc} setDesc={setDesc} />
            <hr className="my-5" />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}
export default Main;
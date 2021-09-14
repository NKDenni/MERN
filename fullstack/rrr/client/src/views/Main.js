import React, { useEffect, useState } from 'react'
import Form from '../components/form';
import ProductList from '../components/plist';
import axios from 'axios';
const Main = (props) => {
    const { products, setProducts, removeFromDom } = props;

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
                setLoaded(true);
            });
    }, [])

    const newProduct = (product) => {
        console.log(product);
        axios.post('http://localhost:8000/api/product', product)
            .then(res => {
                console.log(res.data);
                setProducts([...product, res.data])
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 className="text-center">Product Manager</h1>
            <Form initialTitle={""} initialPrice={0.00} initialDesc={""} onSubmitProp={newProduct}/>
            <hr className="my-5" />
            {loaded && <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom} />}
        </div>
    )
}
export default Main;
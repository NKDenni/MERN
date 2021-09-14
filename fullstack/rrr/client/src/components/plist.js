import React, { useEffect }  from 'react'
import { Link } from '@reach/router';
import DeleteButton from './delete';
import axios from 'axios';
const ProductList = (props) => {
    const { products, setProducts, removeFromDom } = props;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {setProducts(res.data)})
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    return (
        <div className="row d-flex justify-content-center">
            {products.map((product, index) => {
                return(
                <div key={index} className="border m-3 p-4 col-sm-2 text-center">
                    <Link to={"/api/product/" + product._id}>
                    <h5>{product.title}</h5>
                    </Link>
                    <Link to={"/product/" + product._id + "/edit"}> Edit </Link>
                    <div className="text-center">
                        <DeleteButton
                        id={product._id}
                        successCallback={() => removeFromDom(product._id)} />
                    </div>
                </div>
                )
            })}
        </div>
    )
}
export default ProductList;
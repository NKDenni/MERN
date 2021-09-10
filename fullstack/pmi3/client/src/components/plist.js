import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios';
const ProductList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div className="row d-flex justify-content-center">
            {props.products.map((product, idx) => {
                return(
                <div key={idx} className="border m-3 p-4 col-sm-2 text-center">
                    <Link to={"/api/product/" + product._id}>
                    <h5>{product.title}</h5>
                    </Link>
                    <Link to={"/product/" + product._id + "/edit"}> Edit </Link>
                    <div className="row d-flex justify-content-center">
                        <button 
                            className="mt-4 btn-light rounded col-sm-4" 
                            onClick={(e) => { deleteProduct(product._id) }}>
                                Delete
                        </button>
                    </div>
                </div>
                )
            })}
        </div>
    )
}
export default ProductList;
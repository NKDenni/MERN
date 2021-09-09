import React from 'react'
import { Link } from '@reach/router';
const ProductList = (props) => {
    return (
        <div className="row d-flex justify-content-center">
            {props.products.map((product, idx) => {
                return(
                <div key={idx} className="border m-3 p-4 col-sm-2 text-center">
                    <Link to={`${product._id}`}>
                    <h5>{product.title}</h5>
                    </Link>
                    {/* <p>${product.price}</p> */}
                    {/* <p>{product.desc}</p> */}
                </div>
                )
            })}
        </div>
    )
}
export default ProductList;


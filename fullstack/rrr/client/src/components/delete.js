import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const DeleteButton = (props) => {
    const {id, successCallback } = props;

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                console.log(res.data)
                navigate('/api/products')
                successCallback()
            })
            .catch(err => console.log(err))
    }
    return (
        <button 
            className="mt-3 btn-light rounded"
            onClick={(e) => {
                deleteProduct(id);
                }}>
            Delete
        </button>
    )
}
export default DeleteButton;


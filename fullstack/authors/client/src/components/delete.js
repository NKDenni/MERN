import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const DeleteButton = (props) => {
    const {id, successCallback } = props;

    const deleteAuthor = (e) => {
        axios.delete('http://localhost:8000/api/author/' + id)
            .then(res => {
                console.log(res.data)
                navigate('/')
                successCallback()
            })
            .catch(err => console.log(err))
    }
    return (
        <button 
            className="btn-light rounded"
            onClick={(e) => {
                deleteAuthor(id);
                }}>
            Delete
        </button>
    )
}
export default DeleteButton;


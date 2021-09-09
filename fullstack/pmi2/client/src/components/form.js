import React from 'react';
import axios from 'axios';

const Form = (props) => {
    
    const {title, setTitle, price, setPrice, desc, setDesc} = props;

    const handleOnSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            desc
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        setTitle("");
        setPrice(0);
        setDesc("");
    }

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handlePrice= (e) => {
        setPrice(e.target.value);
    }

    const handleDesc = (e) => {
        setDesc(e.target.value);
    }

    return (
        <form className="row mt-5 d-flex justify-content-center flex-column" onSubmit={ handleOnSubmit }>
            <h1 className="text-center">Product Manager</h1>
            <div className="d-flex flex-column align-items-center">
            <div className="row m-3 p-3 rounded-3 col-sm-5 bg-light text-secondary d-flex justify-content-start">
                <label htmlFor="title" className="col-sm-3">Title</label>
                <input
                    className="col-sm-6 ms-4"
                    type="text"
                    name="title"
                    value={title}
                    onChange={ handleTitle }
                />
            </div>
            <div className="row m-3 p-3 rounded-3 col-sm-5 bg-light text-secondary d-flex justify-content-start">
                <label htmlFor="price" className="col-sm-3">Price</label>
                <input
                    className="col-sm-6 ms-4"
                    type="float"
                    name="price"
                    value={price}
                    onChange={ handlePrice }
                />
            </div>
            <div className="row m-3 p-3 rounded-3 col-sm-5 bg-light text-secondary d-flex justify-content-start">
                <label htmlFor="desc" className="col-sm-3">Description</label>
                <input
                    className="col-sm-6 ms-4"
                    type="text"
                    name="desc"
                    value={desc}
                    onChange={ handleDesc }
                />
            </div>
            <button type="submit" className="col-sm-1 btn-light rounded d-flex justify-content-center">Create</button>
            </div>
        </form>
    )
}

export default Form;
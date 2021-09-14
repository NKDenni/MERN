import React, { useState } from 'react';

const Form = (props) => {
    
    const { initialTitle, initialPrice, initialDesc, onSubmitProp } = props;

    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [desc, setDesc] = useState(initialDesc);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({ title, price, desc });
    }

    return (
        <form className="row mt-5 d-flex justify-content-center flex-column" onSubmit={ handleOnSubmit }>
            <div className="d-flex flex-column align-items-center">
            <div className="row m-3 p-3 rounded-3 col-sm-5 bg-light text-secondary d-flex justify-content-start">
                <label htmlFor="title" className="col-sm-3">Title</label>
                <input
                    className="col-sm-6 ms-4"
                    type="text"
                    name="title"
                    value={title}
                    onChange={ (e) => setTitle(e.target.value) }
                />
            </div>
            <div className="row m-3 p-3 rounded-3 col-sm-5 bg-light text-secondary d-flex justify-content-start">
                <label htmlFor="price" className="col-sm-3">Price</label>
                <input
                    className="col-sm-6 ms-4"
                    type="float"
                    name="price"
                    value={price}
                        onChange={ (e) => setPrice(e.target.value) }
                />
            </div>
            <div className="row m-3 p-3 rounded-3 col-sm-5 bg-light text-secondary d-flex justify-content-start">
                <label htmlFor="desc" className="col-sm-3">Description</label>
                <input
                    className="col-sm-6 ms-4"
                    type="text"
                    name="desc"
                    value={desc}
                        onChange={ (e) => setDesc(e.target.value) }
                />
            </div>
            <button type="submit" className="col-sm-1 btn-light rounded d-flex justify-content-center">Create</button>
            </div>
        </form>
    )
}

export default Form;
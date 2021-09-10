import React, { useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const Update = (props) => {

    const { id, title, setTitle, price, setPrice, desc, setDesc, removeFromDom } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDesc(res.data.desc);
            })
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/product/' + id +'/edit', {
            title,
            price,
            desc,
        })
            .then(res => {
                console.log(res)
                navigate('/api/products')
                setTitle("")
                setPrice(0)
                setDesc("")
            })
            .catch(err => console.log(err))
    }

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + id)
            .then(res => {
                removeFromDom(productId)
                navigate('/api/products')
                setTitle("")
                setPrice(0)
                setDesc("")
            })
            .catch( err => console.log(err))
    }

    return (
        <div className="container">
            <div className="row d-flex align-center m-5">
                <h1>Update a Product</h1>
                <form onSubmit={updateProduct}>
                    <p>
                        <label>Title</label><br />
                        <input className="col-sm-8"
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => { setTitle(e.target.value) }} />
                    </p>
                    <p>
                        <label>Price</label><br />
                        <input className="col-sm-8"
                            type="float"
                            name="price"
                            value={price}
                            onChange={(e) => { setPrice(e.target.value) }} />
                    </p>
                    <p>
                        <label>Description</label><br />
                        <textarea className="col-sm-8"
                            style={{resize: "none"}}
                            type="text"
                            name="desc"
                            value={desc}
                            onChange={(e) => { setDesc(e.target.value) }} />
                    </p>
                    <input type="submit" className="btn-light rounded col-sm-1"/>
                </form>
                <button
                    className="ms-2 mt-4 btn-light rounded col-sm-1"
                    onClick={(e) => { deleteProduct(id) }}>
                    Delete
                </button>
            </div>
        </div>
    )
}
export default Update;


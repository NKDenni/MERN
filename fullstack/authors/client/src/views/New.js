import React, { useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import Form from '../components/form';
const New = (props) => {

    const [errors, setErrors] = useState({});

    const newAuthor = (author) => {
        console.log("new author", author);
        axios.post('http://localhost:8000/api/authors', author)
            .then((res) => {
                console.log('then', res)
                navigate("/")
            })
            .catch(err => {
                console.log( 'catch', err.response)
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }


    return (
        <div className="row d-flex justify-content-center">
            <Link className="col-sm-5 col-center" to="/">Home</Link>
            <div className="row d-flex justify-content-center">
                <h6 className="mt-3 col-sm-5 col-center">Add a new Author:</h6>
            </div>
            <Form initialFirstName={""} initialLasttName={""} initalBookTitle={""} onSubmitProp={newAuthor} errors={errors}/>
        </div>
    )
}
export default New;
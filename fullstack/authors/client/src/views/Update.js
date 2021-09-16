import React, { useEffect, useState }  from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Form from '../components/form';
const Edit = (props) => {
    const { id } = props;

    const [errors, setErrors] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [author, setAuthor] = useState({
        firstName:"",
        lastName:"",
        bookTitle:""
    });

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then((res) => {
                console.log("From server",res.data);
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])

    const updateAuthor = (author) => {
        axios.put('http://localhost:8000/api/edit/' + id, author)
            .then((res) => {
                console.log("update Author", res)
                navigate('/')
            })
            .catch(err => {
                console.log('catch', err.response)
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            })
    }

    return (
        <div className="row d-flex justify-content-center">
            <Link className="col-sm-5 col-center" to="/">Home</Link>
            <div className="row d-flex justify-content-center">
                <h6 className="mt-3 col-sm-5 col-center">Edit this Author:</h6>
            </div>
            {loaded && <Form initialFirstName={author.firstName} initialLastName={author.lastName} initialBookTitle={author.bookTitle} errors={errors} onSubmitProp={updateAuthor}/>}
        </div>
    )
}
export default Edit;
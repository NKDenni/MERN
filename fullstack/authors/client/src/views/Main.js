import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import AuthorList from '../components/authorlist';
const Main = (props) => {
    const { firstName, lastName, authors, setAuthors, removeFromDom } = props;

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data);
                setAuthors(res.data);
                setLoaded(true);
            });
    }, [])

    return (
        <div>
            <Link to={"/new"}>
                <h5>Add a new author</h5>
            </Link>
            {loaded && <AuthorList authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom} firstName={firstName} lastName={lastName}/>}
        </div>
    )
}
export default Main;

// setFirstName,  setLastName, bookTitle, setBookTitle,
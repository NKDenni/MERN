import React, { useEffect } from 'react'
import { Link } from '@reach/router';
import DeleteButton from './delete';
import axios from 'axios';

const AuthorList = (props) => {
    const { authors, setAuthors, removeFromDom } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then((res) => { 
                setAuthors(res.data); 
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className="row d-flex justify-content-center">
            <table className="table table-striped table-borderd">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Book Famous For</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
            {authors.map((author, index) => {
                return (
                    <tbody key={index} className="border m-3 p-4 col-sm-2 text-start">
                        <tr>
                            <td scope="row">{ author.firstName }</td>
                            <td>{ author.lastName }</td>
                            <td>{ author.bookTitle }</td>
                            <td>
                                <Link to={"/edit/" + author._id}>
                                    <button className="me-3 btn-info rounded">Edit</button>
                                </Link>
                                <DeleteButton
                                id={author._id}
                                successCallback={() => removeFromDom(author._id)} />
                            </td>
                        </tr>
                    </tbody>
                )
            })}
            </table>
        </div>
    )
}
export default AuthorList;
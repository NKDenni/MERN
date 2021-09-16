import React, { useState } from 'react';
import { Link } from '@reach/router';

const Form = (props) => {
    const {initialFirstName, initialLastName, initialBookTitle, errors, onSubmitProp} = props;

    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [bookTitle, setBookTitle] = useState(initialBookTitle);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({firstName, lastName, bookTitle});
    }

    return (
        <form className="row" onSubmit={handleOnSubmit}>
            <div className="d-flex flex-column align-items-center">
                {errors.firstName && <div>{errors.firstName.message}</div>}
                <div className="row m-3 p-3 rounded-3 col-sm-5 bg-light text-secondary d-flex justify-content-start">
                    <label htmlFor="firstName" className="col-sm-3">First Name</label>
                    <input
                        className="col-sm-6 ms-4"
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                {errors.lastName && <div>{errors.lastName.message}</div>}
                <div className="row m-3 p-3 rounded-3 col-sm-5 bg-light text-secondary d-flex justify-content-start">
                    <label htmlFor="lastName" className="col-sm-3">Last Name</label>
                    <input
                        className="col-sm-6 ms-4"
                        type="float"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                {errors.bookTitle && <div>{errors.bookTitle.message}</div>}
                <div className="row m-3 p-3 rounded-3 col-sm-5 bg-light text-secondary d-flex justify-content-start">
                    <label htmlFor="bookTitle" className="col-sm-3">Famous Book</label>
                    <input
                        className="col-sm-6 ms-4"
                        type="text"
                        name="bookTitle"
                        value={bookTitle}
                        onChange={(e) => setBookTitle(e.target.value)}
                    />
                </div>
                <div className="d-flex flex-row">
                    <Link to="/">
                        <button className="mx-2 col btn-secondary rounded">Cancel</button>
                    </Link>
                    <button type="submit" className="mx-2 col-sm-5 btn-light rounded">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Form;
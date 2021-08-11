import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            password
        };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConPassword("");
    };

    return (
        <div className="container">
            <form onSubmit={createUser}>
                <div className="item">
                    <label>First name: </label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="item">
                    <label>Last name: </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="item">
                    <label>Email Address: </label>
                    <input type="text" values={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="item">
                    <label>Password: </label>
                    <input type="text" values={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="item">
                    <label>Confirm Password: </label>
                    <input type="text" values={conPassword} onChange={(e) => setConPassword(e.target.value)} />
                </div>
                <div className="btn">
                    <input type="submit" value="Create User" />
                </div>
            </form>
            <div className="info">
                <h3 className="item">Your form data</h3>
                <p className="item">First Name: { firstName }</p>
                <p className="item">Last Name: { lastName }</p>
                <p className="item">Email: { email }</p>
                <p className="item">Password: { password }</p>
                <p className="item">Confirm Password: { conPassword }</p>
            </div>
        </div>
    );
};

export default Form;

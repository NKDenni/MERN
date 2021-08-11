import React, { useState } from 'react';

const Form = (props) => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[0-9])/;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [conPasswordError, setConPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("Name must be 2 characters or longer!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (!emailRegex.test(email)) {
            setEmailError("Not a valid email!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters or longer!");
        } else if (!passwordRegex.test(password)) {
            setPasswordError("Must contain a-z, A-Z, 0-9");
        } else {
            setPasswordError("");
        }
    }

    const handleConPassword = (e) => {
        setConPassword(e.target.value);
        if (e.target.value !== password) {
            setConPasswordError("Password doesn't match!");
        } else {
            setConPasswordError("");
        }
    }

        const newUser = {
            firstName,
            lastName
        };
        console.log("Welcome", newUser);

    return (
        <div className="container">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="item">
                    <label>First name: </label>
                    <input type="text" value={firstName} onChange={ handleFirstName } />
                    {
                        firstNameError ?
                            <p>{firstNameError}</p> :
                            ''
                    }
                </div>
                <div className="item">
                    <label>Last name: </label>
                    <input type="text" value={lastName} onChange={ handleLastName } />
                    {
                        lastNameError ?
                            <p>{lastNameError}</p> :
                            ''
                    }
                </div>
                <div className="item">
                    <label>Email Address: </label>
                    <input type="text" value={email} onChange={ handleEmail } />
                    {
                        emailError ?
                            <p>{emailError}</p> :
                            ''
                    }
                </div>
                <div className="item">
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} />
                    {
                        passwordError ?
                            <p>{passwordError}</p> :
                            ''
                    }
                </div>
                <div className="item">
                    <label>Confirm Password: </label>
                    <input type="password" onChange={handleConPassword} />
                    {
                        conPasswordError ?
                            <p>{conPasswordError}</p> :
                            ''
                    }
                </div>
                <div className="btn">
                    <input type="submit" value="Create User" />
                </div>
            </form>
        </div>
    );
};

export default Form;

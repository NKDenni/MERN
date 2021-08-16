import React, { useReducer } from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function reducer(state, action) {
    const {type, payload} = action;
    let message = null;
    if (type === 'firstName'){
        if (payload.length < 2){
            message = "Name must be 2 characters or longer!"
        }
    }
    if (type === 'lastName'){
        if (payload.length <2){
            message = "Name must be 2 characters or longer!"
        }
    }
    if (type === 'email'){
        if(!emailRegex.test(payload)){
            message = "Not a valid email"
        }
    }
    return {
        ...state,
        [type]: {value:payload, error: message}
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <form className="row">
            {/* {JSON.stringify(state)} */}
            <div className="my-2">
                <p className="error">
                    {state.firstName.error !== null && (state.firstName.error)}
                </p>
                <label>
                    <span className="col-sm-3 me-4">First name:</span>{' '}
                </label>
                <input
                    className="col-sm-9"
                    type="text"
                    name="firstName"
                    value={state.name}
                    onChange={handleChange}
                />
            </div>
            <div className="my-2">
                <p className="error">
                {state.lastName.error !== null && ( state.lastName.error )}
                </p>
                <label>
                    <span className="col-sm-3 me-4">Last name:</span>{' '}
                </label>
                <input
                    className="col-sm-9"
                    type="text"
                    name="lastName"
                    value={state.name}
                    onChange={handleChange}
                />
            </div>
            <div className="my-2">
                <p className="error mt-2">
                {state.email.error !== null && ( state.email.error )}
                </p>
                <label>
                    <span className="col-sm-4 me-5 pe-2">Email :</span>{' '}
                </label>
                <input
                    className="col-sm-9"
                    type="text"
                    name="email"
                    value={state.name}
                    onChange={handleChange}
                />
            </div>
            <div className="text-center">
                <button className="col-sm-1 btn-primary">Submit</button>
            </div>
        </form>
    );
}

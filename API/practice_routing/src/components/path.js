import React from 'react';

const Path = (props) => {

    let border = "";
    if (props.z == null){
        border = null
    }else{
        border = "border border-dark"
    }

    return (
        <div className={`mt-5 ${border}`} style={{color: `${props.y}`, backgroundColor: `${props.z}`}}>
            {
                isNaN(props.x)?
                <h1>The word is: {props.x}</h1>:
                <h1>The number is: {props.x}</h1>
            }
        </div>
    )
}

export default Path;
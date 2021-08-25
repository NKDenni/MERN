import React from 'react';

const Content = (props) =>{

    const {everyTab, thisTab} = props;
    const i = thisTab;


    return(
        <div className="row col-sm-10 d-flex flex-row justify-content-start border">
            <p className="text-start">{everyTab[i].text}</p>
        </div>
    )
}

export default Content;
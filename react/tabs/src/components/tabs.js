import React from 'react';

const Tabs = (props) =>{

    const tabs = [ 
        {label: "home", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi suscipit explicabo voluptas animi illo mollitia ducimus delectus iusto magnam officiis minus, ea, repellendus nemo voluptatibus quia voluptate optio quibusdam?"}, 
        { label: "About", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi suscipit explicabo voluptas animi illo mollitia ducimus delectus iusto magnam officiis minus, ea, repellendus nemo voluptatibus quia voluptate optio quibusdam?"},
        { label: "Contact", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi suscipit explicabo voluptas animi illo mollitia ducimus delectus iusto magnam officiis minus, ea, repellendus nemo voluptatibus quia voluptate optio quibusdam?"}]

    const handleContent = (e) => {
        console.log(e.target.value);
        const i = e.target.value;
        console.log(i);
        let style = "primary";
        tabs.filter((_text, i) => {
            return i, style;
        })
    }

    return (
        <div className="container">
            <div className="row d-flex flex-row">
                <p className="mt-5 col-sm-2 border bg-`${style}" value="1" onClick={ handleContent }>Home</p>
                <p className="mt-5 col-sm-2 border" value="2">About</p>
                <p className="mt-5 col-sm-2 border" value="3">Contact</p>
            </div>
            {tabs.map((tab,index) => {
            return (
                <div className="row" >
                    <div className="col-sm-9 border">
                        {tab.text}
                    </div>
                </div>
                );
            })}
        </div>
        )
}

export default Tabs;
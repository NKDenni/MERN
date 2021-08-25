import React from 'react';

const Tabs = (props) =>{

    const {everyTab, thisTab, setThisTab} = props;

    const handleContent = (i) =>{
        if (i === thisTab){
            return "bg-secondary text-white";
        } else {
            return "";
        }
    }

    return (
        <div className="row d-flex flex-row">
            {
            everyTab.map((tab,index) => {
                return(
                    <p 
                        key={index} 
                        className={`mt-5 col-sm-2 border ${handleContent(index)}`}
                        onClick={(e)=>setThisTab(index)}
                        >{tab.label}
                    </p>
                )
            })
            }
        </div>
    )}

export default Tabs;
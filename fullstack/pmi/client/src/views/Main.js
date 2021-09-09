import React, {  useState } from 'react'
import Form from '../components/form';
// import axios from 'axios';
const Main = () => {
    // const [message, setMessage] = useState("Loading...")

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0.00);
    const [desc, setDesc] = useState("");

    return (
        <div>
            {/* <h2>Message from the backend: { message }</h2> */}
            <Form title={title} setTitle={setTitle} price={price} setPrice={setPrice} desc={desc} setDesc={setDesc} />
        </div>
    )
}
export default Main;


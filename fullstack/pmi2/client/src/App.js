import React, { useState } from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Details';

function App() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.00);
  const [desc, setDesc] = useState("");


  return (
    <div className="App">
      <Router>
        <Main path="/api/products" title={title} setTitle={setTitle} price={price} setPrice={setPrice} desc={desc} setDesc={setDesc}/>
        <Detail path="/api/products/:id"/>
      </Router>
    </div>
  );
}

export default App;

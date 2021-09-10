import React, { useState } from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Details';
import Update from './views/Update';

function App() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.00);
  const [desc, setDesc] = useState("");

  const [products, setProducts] = useState([]);

  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId));
  }

  return (
    <div className="App">
      <Router>
        <Main path="/api/products" title={title} setTitle={setTitle} price={price} setPrice={setPrice} desc={desc} setDesc={setDesc} products={products} setProducts={setProducts} setDesc={setDesc} removeFromDom={removeFromDom}/>
        <Detail path="/api/product/:id" setTitle={setTitle} setPrice={setPrice} setDesc={setDesc} removeFromDom={removeFromDom}/>
        <Update path="/product/:id/edit" title={title} setTitle={setTitle} price={price} setPrice={setPrice} desc={desc} setDesc={setDesc} removeFromDom={removeFromDom}/>
      </Router>
    </div>
  );
}

export default App;

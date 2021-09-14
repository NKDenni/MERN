import React, { useState } from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Details';
import Update from './views/Update';

function App() {

  const [products, setProducts] = useState([]);

  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id !== productId));
  }

  return (
    <div className="App">
      <Router>
        <Main path="/api/products" products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        <Detail path="/api/product/:id"  removeFromDom={removeFromDom}/>
        <Update path="/product/:id/edit" removeFromDom={removeFromDom}/>
      </Router>
    </div>
  );
}

export default App;

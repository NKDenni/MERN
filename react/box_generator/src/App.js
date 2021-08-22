import './App.css';
import React, { useState } from 'react';
import Generator from './components/generator'
import Display from './components/display'


function App() {
  const [blocks, setBlocks] = useState([]);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  return (
    <div className="App">
      <div>
        <h1 className="m-3">Color Box Generator</h1>
        <Generator blocks={blocks} setBlocks={setBlocks} color={color} setColor={setColor} size={size} setSize={setSize} />
        <Display blocks={blocks}/>
      </div>
    </div>
  );
}

export default App;

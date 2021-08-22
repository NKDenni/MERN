import React from 'react';
import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Main from './components/main';
import SubContents from './components/subcontent';
import Advertisement from './components/advertisement';


function App() {
  return (
    <div className="app container p-3" style={{backgroundColor: "#dddddd"}}>
      <Header />
      <div className="d-flex">
        <Navigation />
        <Main>
          <div className="d-flex flex-row h-75">
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
          <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;


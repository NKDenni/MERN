import React, { useState } from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Update from './views/Update';

function App() {

  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const removeFromDom = authorId => {
    setAuthors(authors.filter(author => author._id !== authorId));
  }

  return (
    <div className="App container">
      <h1 className="text-center">Favorite Authors</h1>
      <Router>
        <Main default path="/" authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom}/>
        <New path="/new" setAuthors={setAuthors}/>
        <Update path="/edit/:id" loaded={loaded} setLoaded={setLoaded} setAuthors={setAuthors}/>
      </Router>
    </div>
  );
}


export default App;

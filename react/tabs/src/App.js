import React, {useState} from 'react';
import './App.css';
import Tabs from './components/tabs';
import Content from './components/content';

function App() {

  const tabs = [
    { label: "Home", text: "1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi suscipit explicabo voluptas animi illo mollitia ducimus delectus iusto magnam officiis minus, ea, repellendus nemo voluptatibus quia voluptate optio quibusdam?" },
    { label: "About", text: "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi suscipit explicabo voluptas animi illo mollitia ducimus delectus iusto magnam officiis minus, ea, repellendus nemo voluptatibus quia voluptate optio quibusdam?" },
    { label: "Contact", text: "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi suscipit explicabo voluptas animi illo mollitia ducimus delectus iusto magnam officiis minus, ea, repellendus nemo voluptatibus quia voluptate optio quibusdam?" }]

  const [everyTab, setEveryTab] = useState(tabs);
  const [thisTab, setThisTab] = useState(0);
  

  return (
    <div className="App container">
      <Tabs everyTab={everyTab} thisTab={thisTab} setThisTab={setThisTab}/>
      <Content everyTab={everyTab} thisTab={thisTab}/>
    </div>
  );
}

export default App;

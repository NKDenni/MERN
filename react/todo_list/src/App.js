import './App.css';
import Todo from './components/todo'
import React, { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);

  const [listItem, setListItem] = useState("");
  const [itemCompleted, setItemCompleted] = useState(false);

  const createToDoItem = (e) => {
    e.preventDefault();

    if (listItem.length === 0) {
      return;
    }

    //sets current ToDoList state and adds all existing in the toDoList and one new list object.
    setToDoList([...toDoList, {
      listItem: listItem,
      itemCompleted: itemCompleted,
    }])

    setListItem("");
    setItemCompleted(false);
  }

  const handleCheck = (index) => {
    const updatelist = toDoList.map((toDoList, i) => {
      if (index === i) {
        toDoList.itemCompleted = !toDoList.itemCompleted;
      }
      return toDoList;
    })

    setToDoList(updatelist);
  }

  const handleDelete = (delIn) => {
    console.log(delIn);
    setToDoList(toDoList.filter((_toDoList, i) => {
      return i !== delIn;
    }))
  }


  return (
    <div className="App">
      <Todo toDoList={toDoList} createToDoItem={createToDoItem} listItem={listItem} setListItem={setListItem} handleCheck={handleCheck} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;

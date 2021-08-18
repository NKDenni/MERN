import React, { useState } from 'react';

const Todo = (props) => {
    const [toDoList, setToDoList] = useState([]);

    const [listItem, setListItem] = useState("");
    const [itemCompleted, setItemCompleted] = useState(false);

    const createToDoItem = (e) => {
        e.preventDefault();

        if (listItem.length === 0){
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

    const handleCheck = (index) =>{
        const updatelist = toDoList.map((toDoList, i) => {
            if (index === i){
                toDoList.itemCompleted = !toDoList.itemCompleted;
            }
            return toDoList;
        })
        
        setToDoList(updatelist);
    }

    const handleDelete = (delIn) => {
        console.log(delIn);
        setToDoList( toDoList.filter((_toDoList,i) => {
            return i !== delIn;
        }))
    }

    return (
        <div>
            {JSON.stringify(toDoList)}
            <h1>To Do List:</h1>
            <form onSubmit={createToDoItem}>
                <div className="item">
                    <label>New Item: </label>
                    <input type="text" name="listItem" value={listItem} onChange={(e) =>{ setListItem(e.target.value)}} />
                </div>
                <button>Add</button>
            </form>
            <div>
                <ul>
                {
                    toDoList.map((item, index) => {
                        let strike = {};
                        if (item.itemCompleted){
                            strike = {textDecoration: "line-through"};
                        }
                    return (
                        <li key={index} style={strike}>
                            <input
                                style={{ marginLeft: "10px" }}
                                name="itemCompleted"
                                value={item.itemCompleted}
                                checked={item.itemCompleted}
                                onChange={(e) => handleCheck(index)}
                                type="checkbox" />
                            {item.listItem}
                            <button 
                                style={{ marginLeft: "10px", background: "lightblue", borderRadius: "3px" }} 
                                onClick={ (e) => handleDelete(index)}>
                                Delete
                            </button>
                        </li>
                    );
                })}
                </ul>
            </div>
        </div>
    )
}

export default Todo;
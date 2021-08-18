const Todo = (props) => {
    const {toDoList, createToDoItem, listItem, setListItem, handleCheck, handleDelete} = props;

    return (
        <div>
            {JSON.stringify(toDoList)}
            <h1>To Do List:</h1>
            <form onSubmit={createToDoItem}>
                <div className="item">
                    <label>New Item: </label>
                    <input type="text" name="listItem" value={listItem} onChange={(e) =>{ setListItem(e.target.value)}} />
                </div>
                <button style={{margin: "10px"}}>Add</button>
            </form>
            <div>
                <ul>
                { toDoList.map((item, index) => {
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
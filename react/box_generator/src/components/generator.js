const Generator = (props) => {
    const {blocks, setBlocks, color, setColor, size, setSize} = props;

    const newBlock = (e) => {
        
        setBlocks([...blocks, {color: color, size: size}])
        setSize("");
        setColor("");
    }

    return(
    <div className="newbox">
        <label htmlFor="color" className="me-2">Color: </label>
        <input type="text" name="color" value={color} onChange={ (e) => {setColor(e.target.value)}}/>
        <label htmlFor="size" className="mx-2">Size: </label>
        <select style={{width: "50px", height: "30px"}} type="int" name="size" value={size} onChange={(e) => { setSize(e.target.value) }}>
            <option name="size">-</option>
            <option name="size" value="150">1</option>
            <option name="size" value="200">2</option>
            <option name="size" value="250">3</option>
        </select>
        <button 
            className="ms-2 btn btn-primary btn-sm" 
            type="button" 
            onClick={ newBlock }>
            Add
        </button>
    </div>
    )
}

export default Generator;


const Display = (props) => {
    const {blocks} = props;

    return (
    <div className="d-flex flex-row flex-wrap">
        {blocks.map((block, index) => {
            return (
                <div id="box" key={index} className="m-4" style={{ width: `${block.size}px`, height: `${block.size}px`, backgroundColor: `${block.color}` }}></div>
            )
        })}
    </div>
    )
}

export default Display;
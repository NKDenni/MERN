const Main = (props) => {
    return(
        <div className="row d-flex col-9 m-2 p-2" style = {{ backgroundColor: "#e06666"}}>
            {props.children}
        </div>

    )
}

export default Main;
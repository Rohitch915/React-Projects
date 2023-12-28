let ButtonCreate = ({props,btnClick}) => {
    return (
        <>
     <div className="col"><button className="buttonDiv" onClick={btnClick}>{props}</button></div>
        </>
    )
}

export default ButtonCreate;
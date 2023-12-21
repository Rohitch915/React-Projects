const TableRow = (props) =>{
   
    return (
        <>
        <tr>
            <td>{props.prop1[props.id]["todo"]}</td>
            <td>{props.prop1[props.id]["date"]}</td>
            <td><button type="button" className="btn btn-outline-danger">Delete</button></td>
        </tr>
        </>
    )

}

export default TableRow;
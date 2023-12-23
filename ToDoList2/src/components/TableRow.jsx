let TableRow = ({obj,removeList}) => {

    return (<>
        {<tr>
            <td>{obj.task}</td>
            <td>{obj.date}</td>
           
            <td><button type="button" className="btn btn-outline-danger" onClick={removeList}>Delete</button></td>
        </tr>}
    </>)
}
export default TableRow;
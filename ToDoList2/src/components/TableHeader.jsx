const TableHeader= ({onAdd}) =>{

    return (
        <>
        <tr>
            <td><input type="text" placeholder="Enter task"/></td>
            <td><input type="date" name="" id="" /></td>
            <td><button type="button" className="btn btn-outline-success" onClick={onAdd}>Add</button></td>
        </tr>
        </>
    )
}

export default TableHeader;
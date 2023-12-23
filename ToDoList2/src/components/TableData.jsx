import TableRow from "./TableRow";
const TableData = ({arr,removeList}) =>{
 
    return (
        <>
        {arr.map( (item) => {
            
            return <TableRow key={item.task} obj={item} removeList={removeList}></TableRow>
        })}
        
        </>
    )

}

export default TableData;
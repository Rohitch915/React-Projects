import { useContext,useRef } from 'react';
import style from './Input.module.css'
import { ToDoContext } from '../store/ToDoContext1';
let Input = () =>{
  let {onAdd}=useContext(ToDoContext);
  let onClick=()=>{
    onAdd(toDoItem.current.value);
    toDoItem.current.value="";
  }
  let toDoItem=useRef("");
    return <>
      <input type="text" placeholder="Enter Task" className="input"  ref={toDoItem}/>
      <button type="button" className={`btn btn-success ${style.inputBtn}`} onClick={onClick}>Add</button>

    </>
}

export default Input;
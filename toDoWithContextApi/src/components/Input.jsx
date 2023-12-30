import { useContext } from 'react';
import { ToDoContext } from '../store/ToDoContext';
import style from './Input.module.css'
import { useRef } from 'react';
let Input = () =>{
  const { onAdd }=useContext(ToDoContext);
  let curInputVal=useRef("");

  let onClick =()=>{
    onAdd(curInputVal.current.value);
    curInputVal.current.value="";
  }
    return <>
      <input type="text" placeholder="Enter Task" className="input" ref={curInputVal}/>
      <button type="button" className={`btn btn-success ${style.inputBtn}`} onClick={onClick}>Add</button>

    </>
}

export default Input;
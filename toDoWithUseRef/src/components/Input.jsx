import style from './Input.module.css'
import { useRef } from 'react';
let Input = ({onAdd}) =>{
  let curTaskVal=useRef("");
  let ex = () =>{
    onAdd(curTaskVal.current.value);
    curTaskVal.current.value="";
  }
    return <>
      <input type="text" placeholder="Enter Task" className="input"   ref={curTaskVal}/>
      <button type="button" className={`btn btn-success ${style.inputBtn}`} onClick={ex}>Add</button>

    </>
}

export default Input;
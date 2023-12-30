import { useRef } from "react";
import { useDispatch } from "react-redux";

const Buttons = () => {

    let curInputValue=useRef();
    let dispatch=useDispatch();
    const incClick=()=>{
          dispatch({type:'INC'});
    }
    const decClick=()=>{
          dispatch({type:'DEC'});
    }
    const onAdd=()=>{
        dispatch({type:"ADD",payload:{
            num:curInputValue.current.value,
        }})
        curInputValue.current.value=""
    }
    const onSub=()=>{
        dispatch({type:"SUB",payload:{
            num:curInputValue.current.value,
        }})
        curInputValue.current.value=""
    }

    const privacy=()=>{
        dispatch({type:"PRIVATE"})
    }
    return (
        <>
        <div>
            <button type="button" className="btn btn-primary myBtn" onClick={incClick}>+1</button>
            <button type="button" className="btn btn-danger myBtn" onClick={decClick}>-1</button>
            <button type="button" className="btn btn-primary myBtn" onClick={privacy}>Privacy</button>
            </div>
            <div className="input-div">
                <input type="text" placeholder="Enter Number" ref={curInputValue}/>
                <button type="button" className="btn btn-primary myBtn" onClick={onAdd}>Add</button>
            <button type="button" className="btn btn-danger myBtn" onClick={onSub}>Subtract</button>
            </div>
        </>
    )
}

export default Buttons;
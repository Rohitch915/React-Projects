import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyAction } from "../store/privacy";

const Buttons = () => {
     
    let curInputValue=useRef();
    let dispatch=useDispatch();
 
    const incClick=()=>{
        
          dispatch(counterActions.increment());
    }
    const decClick=()=>{
        dispatch(counterActions.decrement());
    }
    const onAdd=()=>{
        dispatch(counterActions.add(curInputValue.current.value));
        curInputValue.current.value=""
    }
    const onSub=()=>{
        dispatch(counterActions.substract(curInputValue.current.value));
        curInputValue.current.value=""
    }

    const privacy=()=>{
        dispatch(privacyAction.privacy());
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
import style from './Input.module.css'
let Input = ({onAdd,value,onInputChange}) =>{
  
    return <>
      <input type="text" placeholder="Enter Task" className="input"  value={value} onChange={onInputChange}/>
      <button type="button" className={`btn btn-success ${style.inputBtn}`} onClick={onAdd}>Add</button>

    </>
}

export default Input;
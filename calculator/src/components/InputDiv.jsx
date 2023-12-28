import style from "./InputDiv.module.css";
const InputDiv = ({text}) => {
   
    return (
        <>
        <div className={style.input} >{text}</div>
        
        </>
    )
}

export default InputDiv;
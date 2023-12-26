import style from './Container.module.css'
let Container = (props) =>{
    return (
        <>
        <div className={`${style.container}`}>{props.children}</div>
        </>
    )
}

export default Container;
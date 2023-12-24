import style from './Tasks.module.css'
let Tasks = ({arr,deleteTask}) => {
 
    return (
        <>
          {arr.map((item) => {
              return <div key={item} className={`${style.taskDiv}`}>
                <span>{item}</span>
                <button type="button" className={`btn btn-danger ${style.taskBtn}`} onClick={()=>deleteTask(item)}>Remove</button>

              </div>
          
        }
    ) }
        </>
    )
}


export default Tasks;
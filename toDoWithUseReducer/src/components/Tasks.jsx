import { useContext } from 'react'
import style from './Tasks.module.css'
import { ToDoContext } from '../store/ToDoContext1'

let Tasks = () => {
 let {taskCurValArr,deleteTask}=useContext(ToDoContext);
    return (
        <>
          {taskCurValArr.map((item) => {
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
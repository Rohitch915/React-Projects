import { useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading'
import Container from './components/Container'
import Input from './components/Input'
import Tasks from './components/Tasks'
import { ToDoContext } from './store/ToDoContext'

function App() {

 
  let [taskCurValArr, setTask] = useState([]);
 
  let onAdd = (taskCurVal) => {
    let newArr = [...taskCurValArr, taskCurVal];
    setTask(newArr);
  }
 

  let deleteTask = (item) => {
    let newArr=taskCurValArr.filter((item1)=>item1!==item)
    setTask(newArr)
  }

  return (<>
  <ToDoContext.Provider value={{taskCurValArr,onAdd,deleteTask}}>
    <Container>
      <Heading heading={"To Do List"} ></Heading>
      <Input></Input>
      <Tasks></Tasks>
    </Container>
    </ToDoContext.Provider>
  </>
  )
}

export default App

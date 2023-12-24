import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading'
import Container from './components/Container'
import Input from './components/Input'
import Tasks from './components/Tasks'

function App() {

  let [taskCurVal, setTaskCurVal] = useState("");
  let [taskCurValArr, setTask] = useState([]);

  let onAdd = (event) => {

    let newArr = [...taskCurValArr, taskCurVal];
    setTaskCurVal("");
    setTask(newArr);
  }
  let onInputChange = (e) => {
    setTaskCurVal(e.target.value);
  }

  let deleteTask = (item) => {
    let newArr=taskCurValArr.filter((item1)=>item1!==item)
    setTask(newArr)
  }

  return (<>
    <Container>
      <Heading heading={"To Do List"} ></Heading>
      <Input onAdd={onAdd} value={taskCurVal} onInputChange={onInputChange}></Input>
      <Tasks arr={taskCurValArr} deleteTask={deleteTask}></Tasks>
    </Container>
  </>
  )

}

export default App

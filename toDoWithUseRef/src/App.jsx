import { useRef, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading'
import Container from './components/Container'
import Input from './components/Input'
import Tasks from './components/Tasks'

function App() {

  let [taskCurValArr, setTask] = useState([]);
  
  let onAdd = (curVal) => {
    let newArr = [...taskCurValArr, curVal];
    setTask(newArr);
  }
  
  let deleteTask = (item) => {
    let newArr=taskCurValArr.filter((item1)=>item1!==item)
    setTask(newArr)
  }

  return (<>
    <Container>
      <Heading heading={"To Do List"} ></Heading>
      <Input onAdd={onAdd}  ></Input>
      <Tasks arr={taskCurValArr} deleteTask={deleteTask}></Tasks>
    </Container>
  </>
  )

}

export default App

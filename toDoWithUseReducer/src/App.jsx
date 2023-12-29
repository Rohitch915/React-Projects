import { useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading'
import Container from './components/Container'
import Input from './components/Input'
import Tasks from './components/Tasks'
import { ToDoContext } from './store/ToDoContext1'

function reducerFun(taskCurValArr, actionObj) {
  let newArr = taskCurValArr;
  if (actionObj.type === "ADD_TODO") {
    newArr = [...taskCurValArr, actionObj.payload.taskCurVal];
  } else if (actionObj.type === "DELETE_TODO") {
    newArr = taskCurValArr.filter((item1) => item1 !== actionObj.payload.taskCurVal)
  }
  return newArr;
}

function App() {

  let [taskCurValArr, dispatchToDo] = useReducer(reducerFun, [])

  let onAdd = (taskCurVal) => {
    const newActionObj = {
      type: "ADD_TODO",
      payload: {
        taskCurVal
      }
    }
    dispatchToDo(newActionObj)
  }

  let deleteTask = (taskCurVal) => {
    const newActionObj = {
      type: "DELETE_TODO",
      payload: {
        taskCurVal
      }
    }
    dispatchToDo(newActionObj)
  }

  return (<>
    <ToDoContext.Provider value={{
      taskCurValArr,
      onAdd,
      deleteTask
    }}>
      <Container>
        <Heading heading={"To Do List"} ></Heading>
        <Input ></Input>
        <Tasks></Tasks>
      </Container>
    </ToDoContext.Provider>
  </>
  )

}

export default App

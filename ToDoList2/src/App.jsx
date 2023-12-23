import Heading from "./components/Heading.jsx"
import TableHeader from './components/TableHeader.jsx';
import TableData from './components/TableData.jsx';
import './App.css'
import { useState } from 'react';
function App() {
  let heading = "Todo App";
  let [toDoArr,setToDo]=useState([]);
  let addList = (e) => {
   let task=e.target.parentElement.parentElement.firstElementChild.firstElementChild.value;
   let date=e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.value;
   let newToDoArray=[...toDoArr,{task,date}];
   setToDo(newToDoArray);
   e.target.parentElement.parentElement.firstElementChild.firstElementChild.value="";
   e.target.parentElement.parentElement.firstElementChild.nextElementSibling.firstElementChild.value="";
  }
 
  let removeList = (e) =>{
   e.target.parentElement.parentElement.remove();
  }
  return (<>
    <Heading heading={heading}></Heading>
    <table className="table">
      <thead>
         <TableHeader onAdd={addList}></TableHeader>
         
      </thead>
      <tbody>
      <TableData arr={toDoArr} removeList={removeList}></TableData>

      </tbody>
    </table>
  </>
  )

}

export default App

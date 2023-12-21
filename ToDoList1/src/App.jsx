import TableHeader from './components/TableHeader.jsx';
import TableRow from './components/TableData.jsx';
import './App.css'
import Heading from "./components/Heading.jsx"
function App() {
  let heading = "Todo App";
  const prop=[{"todo":"Buy Milk","date":"04/11/23"},{"todo":"go to school","date":"04/11/24"},
  {"todo":"study","date":"06/11/24"}];
 
  return (<>
    <Heading heading={heading}></Heading>
    <table className="table">
      <thead>
         <TableHeader></TableHeader>
         <TableRow  prop1={prop} id={0}/>
         <TableRow  prop1={prop} id={1}/>
         <TableRow  prop1={prop} id={2}/>
        
      </thead>
      <tbody>
         

      </tbody>
    </table>
  </>
  )

}

export default App

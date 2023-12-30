import './App.css'
import Header from './components/Header'
import CounterValue from './components/CounterValue'
import Buttons from './components/Buttons'
import Messege from './components/Message'
import { useSelector } from 'react-redux'
function App() {
 let privac=useSelector((store)=>store.privacy)

  return (
   
    <center>
      <div className="card myCard" >
       
        <div className="card-body">
           <Header></Header>
           {privac ? <Messege/>:<CounterValue></CounterValue>}
           <Buttons></Buttons>

        </div>
      </div>
      </center>
   
  )
}

export default App;

import './App.css'
import Header from './components/Header'
import CounterValue from './components/CounterValue'
import Buttons from './components/Buttons'
import Messege from './components/Message'
import { useSelector } from 'react-redux'
function App() {
 let privacy=useSelector((store)=>store.privacy)
 
  return (
   
    <center>
      <div className="card myCard" >
       
        <div className="card-body">
           <Header></Header>
            {privacy ? <Messege/>: <CounterValue> 
            </CounterValue>}
           <Buttons></Buttons>

        </div>
      </div>
      </center>
   
  )
}

export default App;

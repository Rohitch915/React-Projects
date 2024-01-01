import { useSelector } from "react-redux";

const CounterValue=()=>{
  let {counter}=useSelector((store)=>store.counter)
  return(
    <p className="card-text">Counter Value : {counter}</p>
  )
}
export default CounterValue;

import { createStore } from "redux";


let initialStore={
    counter:0,
    privacy:false
}
function reducer(store=initialStore,action){
  let newStore=store
  if(action.type=="INC"){
    newStore={...store,counter:store.counter+1}
  }
  else if(action.type=="DEC"){
    newStore={...store,counter:store.counter-1}
  }
  else if(action.type=="ADD"){
    newStore={...store,counter:store.counter+Number(action.payload.num)}
  }
  else if(action.type=="SUB"){
    newStore={...store,counter:store.counter-Number(action.payload.num)}
  }
  else if(action.type=="PRIVATE"){
    newStore={...store,privacy:!store.privacy}
  }
  return newStore;
}
const CounterStore=createStore(reducer)

export default CounterStore;


import './App.css'
import InputDiv from './components/InputDiv.jsx'
import Button from './components/Button.jsx'
import { useState } from 'react';
function App() {
  let arr = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.','X'];
  let [expression,setExpression]= useState("");
  
  let onBtnClick = (e) =>{
    if(e.target.innerHTML==='C'){
     
    setExpression("");
   
    }else if(e.target.innerHTML==='X'){
      
      let newExpression=expression.substring(0,expression.length-1);
      setExpression(newExpression);
    }else if(e.target.innerHTML==='='){
      
      try{
        let newExpression=eval(expression);
        setExpression(newExpression);
       
      }catch(e){
        console.log(e);
        setExpression("you have entered wrong expression.");
      }
     
    }else{
    let newExpression=expression+e.target.innerHTML;
    setExpression(newExpression)
    }
    
  }
  return (
    <>
      <div className='main'>
        <InputDiv text={expression}></InputDiv>
        <Button arr={arr} btnClick={onBtnClick}></Button>
      </div>
    </>
  )
}

export default App

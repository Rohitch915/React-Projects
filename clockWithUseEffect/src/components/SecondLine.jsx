import { useEffect } from "react";
import { useState } from "react";

function SecondLine(){
  let [curDate,setCurDate]=useState(new Date());
  
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      setCurDate(new Date());
    },1000)

    return ()=>{
      clearInterval(intervalId);
    }
  },[])

  return <p>
    This is the Current Time : {curDate.toLocaleDateString('en-GB')} - {
      curDate.toLocaleTimeString()
    }
  </p>
}

export default SecondLine;
function SecondLine(){
  const d=new Date();
  return <p>
    This is the Current Time : {d.toLocaleDateString('en-GB')} - {
      d.toLocaleTimeString()
    }
  </p>
}

export default SecondLine;
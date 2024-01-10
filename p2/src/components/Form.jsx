import { useRef, useState } from "react";

const Form = () => {
   
    let name=useRef();
    let email=useRef();
    let text=useRef();
    let [name1,setName]=useState("");
    let [email1,setEmail]=useState("");
    let [text1,setText]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        setName(name.current.value);
        setEmail(email.current.value);
        setText(text.current.value);
    }
    return (
        <>
            <div className="form">
                <button type="button" className="btn btn-light email-form-btn">Via Email Form</button>
                <form action="" onSubmit={submit}>
                   <div className="name">
                    <label htmlFor="name1">Name</label><br />
                    <input type="text" placeholder="Enter Your Name..." ref={name} id="name1" required/>
                   </div>
                   <div className="email">
                    <label htmlFor="email1">Email</label><br />
                    <input type="email" placeholder="Enter Your Email..." ref={email} id="email1" required/>
                   </div>
                   <div className="text-area">
                    <label htmlFor="textarea">Text</label><br />
                    <textarea id="textarea1" cols="30" rows="6" placeholder="Enter Text" ref={text} required></textarea>
                   </div>
                 
                   <input type="submit" value="SUBMIT BUTTON" className="btn btn-dark submit"/>
                </form>
            </div>
            <div className="result">{name1+" "+email1+" "+text1 }</div>
        </>
    )
}

export default Form;
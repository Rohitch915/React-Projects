import { useContext } from "react";
import { SocialMedia } from "../store/SocialMedia";

let MessegeBtn =()=>{

    let {getPosts}=useContext(SocialMedia)
    
    return (
        <center>
        <button type="button" className="btn btn-primary messegeBtn" onClick={
         getPosts}>Get Posts</button>
        </center>
    )
}

export default MessegeBtn;
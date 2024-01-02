import { useContext } from "react";
import { SocialMedia } from "../store/SocialMedia";

let MessegeBtn =()=>{

    let {getPosts}=useContext(SocialMedia)
    
    return (
        <center>
       <div className="messege">No Posts Yet.</div>
        </center>
    )
}

export default MessegeBtn;
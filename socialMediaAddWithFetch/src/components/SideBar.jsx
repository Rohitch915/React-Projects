import { useContext, useState } from "react";
import { SocialMedia } from "../store/SocialMedia";

const SideBar=()=>{
    let [curHomeId,setHomeId]=useState("selectedSidebar")
    let [curPostId,setPostId]=useState("")
    let {changeState}=useContext(SocialMedia)
   
    let homeOnClick=()=>{
        if(!(curHomeId=="selectedSidebar")){
            changeState("home")
            setPostId("")
            setHomeId("selectedSidebar")
        }
    }

    let postOnClick=()=>{
        if(curPostId==""){
            changeState("createPost")
            setHomeId("")
            setPostId("selectedSidebar")
        }
    }
    return (
        <>
            <div className="sidebar">
                <h3>Sidebar</h3>
                <button type="button" id={curHomeId} onClick={()=>homeOnClick()}>Home</button>
                <button type="button" id={curPostId} onClick={postOnClick}>Create Post</button>
            </div>
        </>
    )
}

export default SideBar;
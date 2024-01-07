import { Link } from "react-router-dom";

const SideBar=()=>{
   
    return (
        <>
            <div className="sidebar">
                <h3>Sidebar</h3>
                <Link to="/" id="home" >Home</Link>
                <Link to="/create-post" id="createpost">Create Post</Link>
            </div>
        </>
    )
}

export default SideBar;
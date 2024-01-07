import { useContext, useRef } from "react";
import { SocialMedia } from "../store/SocialMedia";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
    let userId = useRef();
    let title = useRef();
    let content = useRef();
    let noOfReactions = useRef();
    let hashtags = useRef();

    const navigate=useNavigate();

    let postCurVal = () => {
        let curUserId=userId.current.value;
        let curtitle = title.current.value;
        let curcontent = content.current.value;
        let curnoOfReactions = noOfReactions.current.value;
        let curhashtags = hashtags.current.value;

        userId.current.value="";
        title.current.value="";
        content.current.value="";
        noOfReactions.current.value="";
        hashtags.current.value="";

        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId:curUserId,
                title: curtitle,
                body: curcontent,
                reactions: curnoOfReactions,
                tags: curhashtags.split(" "),
                
            })
        })
        .then(res => res.json())
        .then(post=>addPost(post));
         navigate('/')
       
    }

    const { addPost } = useContext(SocialMedia);
    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="userID" className="form-label">Enter Your User Id here</label>
                    <input type="text" className="form-control" id="userID" placeholder="Your User Id" ref={userId} />
                </div>
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">Post Title</label>
                    <input type="text" className="form-control" id="postTitle" placeholder="How are you feeling today" ref={title} />
                </div>
                <div className="mb-3">
                    <label htmlFor="postContent" className="form-label">Post Content</label>
                    <textarea className="form-control" id="postContent" rows="4" placeholder="Tell us more about it" ref={content}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">No Of Reactions</label>
                    <input type="text" className="form-control" id="reactions" placeholder="How many people reacted to this post" ref={noOfReactions} />
                </div>
                <div className="mb-3">
                    <label htmlFor="hashtags" className="form-label">Enter Your Hashtags here</label>
                    <input type="text" className="form-control" id="hashtags" placeholder="Please enter tags using space" ref={hashtags} />
                </div>

                <button type="button" className="btn btn-primary" onClick={postCurVal}>post</button>
            </form>
        </>
    )
}

export default CreatePost;
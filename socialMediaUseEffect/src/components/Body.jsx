import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { SocialMedia } from "../store/SocialMedia";
import MessegeBtn from "./MessegeBtn";
import Loading from "./Loading";


const Body = () => {
    const { curCardObj, removeCard ,loadingState} = useContext(SocialMedia)
    return (
        <>

            <div className="body">
                {loadingState ? <Loading></Loading>:
               
                    curCardObj.length==0 ? <MessegeBtn/>:curCardObj.map((item) => {

                        return <div className={`card myCard`} key={item.title}>
                            <div className="delBtn" onClick={() => removeCard(item.title)}><AiOutlineDelete /></div>
                            <div className="card-body ">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text card-mytext">{item.body}</p>

                                {item.tags[0] == "" ? undefined : (item.tags).map((arrItem) => {
                                    return <a href="#" className="mybtn tag" key={arrItem}>{arrItem}</a>
                                })}
                                <p className="reactionSection">This post has been reacted by {item.ractions} people</p>
                            </div>

                        </div>

                    })
                }

            </div>
        </>)
}

export default Body;
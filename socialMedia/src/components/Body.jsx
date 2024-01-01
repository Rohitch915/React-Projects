import { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { SocialMedia } from "../store/SocialMedia";


const Body = () => {
  const {curCardObj,removeCard}=useContext(SocialMedia)
    return (
        <>
            <div className="body">
                {curCardObj.map((item) => {

                    return <div className={`card myCard`} key={item.title}>
                        <div className="delBtn" onClick={()=>removeCard(item.title)}><AiOutlineDelete /></div>
                        <div className="card-body ">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text card-mytext">{item.text}</p>
                            
                            {item.tag[0]=="" ? undefined : (item.tag).map((arrItem) => {
                                return <a href="#" className="mybtn tag" key={arrItem}>{arrItem}</a>
                            })}
                            <p className="reactionSection">This post has been reacted by {item.noOfPeople} people</p>
                        </div>

                    </div>

                })
                }
            </div>
        </>)
}

export default Body;
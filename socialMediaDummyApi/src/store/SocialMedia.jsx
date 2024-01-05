import { createContext } from "react";
import Container from "../components/Container";
import { useState } from "react";

export const SocialMedia = createContext({
    getPosts:()=>{},
    curCardObj: {},
    addPost: () => { },
    removeCard: () => { },
    changeState: () => { }
}
)

const SocialMediaProvider = ({ changeState,children }) => {
    
  

   
      let [curCardObj, setCardObj] = useState([]);
    
      const removeCard = (cardTitle) => {
        const newCardObj = curCardObj.filter((item) => !(item.title == cardTitle));
        setCardObj(newCardObj)
      }
    
      const addPost = (title, content, reactions, hashtags) => {
        console.log(curCardObj);
        const newCardObj = [ {
          title: title,
          body: content,
          reactions: reactions,
          tags: hashtags.split(" "),
        },...curCardObj]
        setCardObj(newCardObj)
      }
    
     const getPosts=()=>{
      fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data=>addPosts(data.posts));
     }

     const addPosts=(posts)=>{
     
      setCardObj(posts)
     }
    return (
        <>
            <SocialMedia.Provider value={{ getPosts,curCardObj, addPost, removeCard, changeState }}>
                <Container>
                    {children}
                </Container>
            </SocialMedia.Provider>
        </>
    )
}

export { SocialMediaProvider};

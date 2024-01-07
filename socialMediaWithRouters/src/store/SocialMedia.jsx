import { createContext } from "react";
import Container from "../components/Container";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export const SocialMedia = createContext({
  curCardObj: {},
  addPost: () => { },
  removeCard: () => { },
  
}
)

const SocialMediaProvider = ({  children }) => {

 
  

  let [curCardObj, setCardObj] = useState([]);

  const removeCard = (cardTitle) => {
    const newCardObj = curCardObj.filter((item) => !(item.title == cardTitle));
    setCardObj(newCardObj)
  }

  const addPost = (post) => {
    const newCardObj = [post, ...curCardObj]
    setCardObj(newCardObj)
  }



  const addPosts = (posts) => {
       setCardObj(posts)
  }
  return (
    <>
      <SocialMedia.Provider value={{  curCardObj, addPost, removeCard }}>
        <Container>
          {children}
        </Container>
      </SocialMedia.Provider>
    </>
  )
}



export { SocialMediaProvider };

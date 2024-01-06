import { createContext } from "react";
import Container from "../components/Container";
import { useState, useEffect } from "react";

export const SocialMedia = createContext({
  loadingState:false,
  getPosts: () => { },
  curCardObj: {},
  addPost: () => { },
  removeCard: () => { },
  changeState: () => { }
}
)

const SocialMediaProvider = ({ changeState, children }) => {

  const [loadingState, setLoadingState] = useState(false);


  let [curCardObj, setCardObj] = useState([]);

  const removeCard = (cardTitle) => {
    const newCardObj = curCardObj.filter((item) => !(item.title == cardTitle));
    setCardObj(newCardObj)
  }

  const addPost = (title, content, reactions, hashtags) => {
    console.log(curCardObj);
    const newCardObj = [{
      title: title,
      body: content,
      reactions: reactions,
      tags: hashtags.split(" "),
    }, ...curCardObj]
    setCardObj(newCardObj)
  }
  useEffect(() => {
    setLoadingState(true)
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(
          data =>{ 
            setLoadingState(false),
            addPosts(data.posts)
         }
       )
    
  }, [])

  const getPosts = () => {

  }

  const addPosts = (posts) => {

    setCardObj(posts)
  }
  return (
    <>
      <SocialMedia.Provider value={{ loadingState, getPosts, curCardObj, addPost, removeCard, changeState }}>
        <Container>
          {children}
        </Container>
      </SocialMedia.Provider>
    </>
  )
}

export { SocialMediaProvider };

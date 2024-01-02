import { createContext } from "react";
import Container from "../components/Container";
import { useState, useEffect } from "react";

export const SocialMedia = createContext({
  loadingState: false,
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

  const addPost = (post) => {
    const newCardObj = [post, ...curCardObj]
    setCardObj(newCardObj)
  }
  useEffect(() => {
    setLoadingState(true)
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(
        data => {
          setLoadingState(false),
            addPosts(data.posts)
        }
      )

  }, [])


  const addPosts = (posts) => {


    setCardObj(posts)
  }
  return (
    <>
      <SocialMedia.Provider value={{ loadingState, curCardObj, addPost, removeCard, changeState }}>
        <Container>
          {children}
        </Container>
      </SocialMedia.Provider>
    </>
  )
}

export { SocialMediaProvider };

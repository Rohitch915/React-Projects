import { createContext } from "react";
import Container from "../components/Container";
import { useState } from "react";

export const SocialMedia = createContext({
   
    curCardObj: {},
    addPost: () => { },
    removeCard: () => { },
    changeState: () => { }
}
)

const SocialMediaProvider = ({ changeState,children }) => {
    
  

    let defaultcardObj = [
        {
          title: "Going To Mumbai",
          text: "Hi friends, i'am going to mumbai for my vacation.hope to enjoy a lot.peace out",
          tag: ["vacation", "mumbai", "enjoy"],
          noOfPeople: "2",
        },
        {
          title: "Going To Canada",
          text: "Hi friends, i'am going to canada for my vacation.hope to enjoy a lot.peace out",
          tag: ["vacation", "canada", "enjoy"],
          noOfPeople: "4",
        }
      ]

      let [curCardObj, setCardObj] = useState(defaultcardObj);
    
      const removeCard = (cardTitle) => {
        const newCardObj = curCardObj.filter((item) => !(item.title == cardTitle));
        setCardObj(newCardObj)
      }
    
      const addPost = (title, content, reactions, hashtags) => {
        const newCardObj = [...curCardObj, {
          title: title,
          text: content,
          noOfPeople: reactions,
          tag: hashtags.split(" "),
        }]
        setCardObj(newCardObj)
      }
    

    return (
        <>
            <SocialMedia.Provider value={{ curCardObj, addPost, removeCard, changeState }}>
                <Container>
                    {children}
                </Container>
            </SocialMedia.Provider>
        </>
    )
}

export { SocialMediaProvider};
